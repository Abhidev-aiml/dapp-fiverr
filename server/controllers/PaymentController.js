// PaymentController.js

import { PrismaClient } from "@prisma/generated/client";

import { Connection, PublicKey, Transaction } from "@solana/web3.js";

const prisma = new PrismaClient();

// Set up connection to Solana (adjust endpoint as needed)
const connection = new Connection('https://api.devnet.solana.com');

export const PaymentController = {
  // Function to handle payment initiation
  async initiatePayment(req, res) {
    try {
      const { buyerId, gigId, amount, buyerPublicKey } = req.body;

      // Validate the request
      if (!buyerId || !gigId || !amount || !buyerPublicKey) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Convert buyer's public key from the frontend
      const buyerPubKey = new PublicKey(buyerPublicKey);

      // Create a new transaction (insert specific transaction instructions as needed)
      const transaction = new Transaction().add(
        // Add transaction instructions here
      );

      // Send the transaction using Solana's connection
      const signature = await connection.sendTransaction(transaction, [buyerPubKey]);

      // Confirm the transaction on the blockchain
      await connection.confirmTransaction(signature);

      // Retrieve transaction details from the blockchain
      const transactionDetails = await connection.getTransaction(signature);

      // Save transaction details to the database
      const newTransaction = await prisma.transaction.create({
        data: {
          transactionId: signature,
          buyerId: buyerId,
          gigId: gigId,
          amount: parseFloat(amount),
          status: 'completed',
        },
      });

      // Update buyer's purchased gigs by creating a new order
      await prisma.orders.create({
        data: {
          buyerId: buyerId,
          gigId: gigId,
          paymentIntent: signature,
          isCompleted: true,
          price: parseInt(amount),
        },
      });

      res.status(200).json({
        message: 'Payment successful',
        transaction: newTransaction,
        transactionDetails,
      });
    } catch (error) {
      console.error('Payment error:', error);
      res.status(500).json({ error: 'Payment failed' });
    }
  },
};

