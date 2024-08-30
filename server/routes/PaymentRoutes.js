import { Router } from "express";
import {PaymentController} from "../controllers/PaymentController.js";

export const paymentRoutes = Router();

// Route to initiate the payment
paymentRoutes.post("/pay", PaymentController.initiatePayment);