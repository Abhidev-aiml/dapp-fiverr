
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    gigs: GigsPayload<ExtArgs>[]
    orders: OrdersPayload<ExtArgs>[]
    reviews: ReviewsPayload<ExtArgs>[]
    messagesSent: MessagePayload<ExtArgs>[]
    messagesReceived: MessagePayload<ExtArgs>[]
    transactions: TransactionPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    publicKey: string
    username: string | null
    fullName: string | null
    description: string | null
    profileImage: string | null
    isProfileInfoSet: boolean | null
    createdAt: Date
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type GigsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Gigs"
  objects: {
    createdBy: UserPayload<ExtArgs>
    orders: OrdersPayload<ExtArgs>[]
    reviews: ReviewsPayload<ExtArgs>[]
    transactions: TransactionPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features: string[]
    price: number
    shortDesc: string
    createdAt: Date
    images: string[]
    userId: number
  }, ExtArgs["result"]["gigs"]>
  composites: {}
}

/**
 * Model Gigs
 * 
 */
export type Gigs = runtime.Types.DefaultSelection<GigsPayload>
export type OrdersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Orders"
  objects: {
    buyer: UserPayload<ExtArgs>
    gig: GigsPayload<ExtArgs>
    messages: MessagePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    buyerId: number
    paymentIntent: string
    isCompleted: boolean
    gigId: number
    price: number
  }, ExtArgs["result"]["orders"]>
  composites: {}
}

/**
 * Model Orders
 * 
 */
export type Orders = runtime.Types.DefaultSelection<OrdersPayload>
export type ReviewsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Reviews"
  objects: {
    gig: GigsPayload<ExtArgs>
    reviewer: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    rating: number
    reviewText: string | null
    gigId: number
    reviewerId: number
  }, ExtArgs["result"]["reviews"]>
  composites: {}
}

/**
 * Model Reviews
 * 
 */
export type Reviews = runtime.Types.DefaultSelection<ReviewsPayload>
export type MessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Message"
  objects: {
    sender: UserPayload<ExtArgs>
    recipient: UserPayload<ExtArgs>
    order: OrdersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    text: string
    createdAt: Date
    isRead: boolean
    senderId: number
    recipientId: number
    orderId: number
  }, ExtArgs["result"]["message"]>
  composites: {}
}

/**
 * Model Message
 * 
 */
export type Message = runtime.Types.DefaultSelection<MessagePayload>
export type TransactionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Transaction"
  objects: {
    buyer: UserPayload<ExtArgs>
    gig: GigsPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    transactionId: string
    buyerId: number
    gigId: number
    amount: number
    status: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["transaction"]>
  composites: {}
}

/**
 * Model Transaction
 * 
 */
export type Transaction = runtime.Types.DefaultSelection<TransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.gigs`: Exposes CRUD operations for the **Gigs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gigs
    * const gigs = await prisma.gigs.findMany()
    * ```
    */
  get gigs(): Prisma.GigsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Gigs: 'Gigs',
    Orders: 'Orders',
    Reviews: 'Reviews',
    Message: 'Message',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'gigs' | 'orders' | 'reviews' | 'message' | 'transaction'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Gigs: {
        payload: GigsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GigsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GigsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          findFirst: {
            args: Prisma.GigsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GigsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          findMany: {
            args: Prisma.GigsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>[]
          }
          create: {
            args: Prisma.GigsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          createMany: {
            args: Prisma.GigsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GigsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          update: {
            args: Prisma.GigsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          deleteMany: {
            args: Prisma.GigsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GigsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GigsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GigsPayload>
          }
          aggregate: {
            args: Prisma.GigsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGigs>
          }
          groupBy: {
            args: Prisma.GigsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GigsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GigsCountArgs<ExtArgs>,
            result: $Utils.Optional<GigsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: OrdersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: ReviewsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: MessagePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: TransactionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    gigs: number
    orders: number
    reviews: number
    messagesSent: number
    messagesReceived: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gigs?: boolean | UserCountOutputTypeCountGigsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GigsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Count Type GigsCountOutputType
   */


  export type GigsCountOutputType = {
    orders: number
    reviews: number
    transactions: number
  }

  export type GigsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    orders?: boolean | GigsCountOutputTypeCountOrdersArgs
    reviews?: boolean | GigsCountOutputTypeCountReviewsArgs
    transactions?: boolean | GigsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes

  /**
   * GigsCountOutputType without action
   */
  export type GigsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GigsCountOutputType
     */
    select?: GigsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GigsCountOutputType without action
   */
  export type GigsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * GigsCountOutputType without action
   */
  export type GigsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * GigsCountOutputType without action
   */
  export type GigsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    messages: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | OrdersCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    publicKey: string | null
    username: string | null
    fullName: string | null
    description: string | null
    profileImage: string | null
    isProfileInfoSet: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    publicKey: string | null
    username: string | null
    fullName: string | null
    description: string | null
    profileImage: string | null
    isProfileInfoSet: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    publicKey: number
    username: number
    fullName: number
    description: number
    profileImage: number
    isProfileInfoSet: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    publicKey?: true
    username?: true
    fullName?: true
    description?: true
    profileImage?: true
    isProfileInfoSet?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    publicKey?: true
    username?: true
    fullName?: true
    description?: true
    profileImage?: true
    isProfileInfoSet?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    publicKey?: true
    username?: true
    fullName?: true
    description?: true
    profileImage?: true
    isProfileInfoSet?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    publicKey: string
    username: string | null
    fullName: string | null
    description: string | null
    profileImage: string | null
    isProfileInfoSet: boolean | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    username?: boolean
    fullName?: boolean
    description?: boolean
    profileImage?: boolean
    isProfileInfoSet?: boolean
    createdAt?: boolean
    gigs?: boolean | User$gigsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    publicKey?: boolean
    username?: boolean
    fullName?: boolean
    description?: boolean
    profileImage?: boolean
    isProfileInfoSet?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gigs?: boolean | User$gigsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    gigs<T extends User$gigsArgs<ExtArgs> = {}>(args?: Subset<T, User$gigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findMany', never>| Null>;

    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.gigs
   */
  export type User$gigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    where?: GigsWhereInput
    orderBy?: Enumerable<GigsOrderByWithRelationInput>
    cursor?: GigsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GigsScalarFieldEnum>
  }


  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReviewsScalarFieldEnum>
  }


  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Gigs
   */


  export type AggregateGigs = {
    _count: GigsCountAggregateOutputType | null
    _avg: GigsAvgAggregateOutputType | null
    _sum: GigsSumAggregateOutputType | null
    _min: GigsMinAggregateOutputType | null
    _max: GigsMaxAggregateOutputType | null
  }

  export type GigsAvgAggregateOutputType = {
    id: number | null
    deliveryTime: number | null
    revisions: number | null
    price: number | null
    userId: number | null
  }

  export type GigsSumAggregateOutputType = {
    id: number | null
    deliveryTime: number | null
    revisions: number | null
    price: number | null
    userId: number | null
  }

  export type GigsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    deliveryTime: number | null
    revisions: number | null
    price: number | null
    shortDesc: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type GigsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    deliveryTime: number | null
    revisions: number | null
    price: number | null
    shortDesc: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type GigsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    deliveryTime: number
    revisions: number
    features: number
    price: number
    shortDesc: number
    createdAt: number
    images: number
    userId: number
    _all: number
  }


  export type GigsAvgAggregateInputType = {
    id?: true
    deliveryTime?: true
    revisions?: true
    price?: true
    userId?: true
  }

  export type GigsSumAggregateInputType = {
    id?: true
    deliveryTime?: true
    revisions?: true
    price?: true
    userId?: true
  }

  export type GigsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    deliveryTime?: true
    revisions?: true
    price?: true
    shortDesc?: true
    createdAt?: true
    userId?: true
  }

  export type GigsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    deliveryTime?: true
    revisions?: true
    price?: true
    shortDesc?: true
    createdAt?: true
    userId?: true
  }

  export type GigsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    deliveryTime?: true
    revisions?: true
    features?: true
    price?: true
    shortDesc?: true
    createdAt?: true
    images?: true
    userId?: true
    _all?: true
  }

  export type GigsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gigs to aggregate.
     */
    where?: GigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: Enumerable<GigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gigs
    **/
    _count?: true | GigsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GigsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GigsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GigsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GigsMaxAggregateInputType
  }

  export type GetGigsAggregateType<T extends GigsAggregateArgs> = {
        [P in keyof T & keyof AggregateGigs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGigs[P]>
      : GetScalarType<T[P], AggregateGigs[P]>
  }




  export type GigsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GigsWhereInput
    orderBy?: Enumerable<GigsOrderByWithAggregationInput>
    by: GigsScalarFieldEnum[]
    having?: GigsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GigsCountAggregateInputType | true
    _avg?: GigsAvgAggregateInputType
    _sum?: GigsSumAggregateInputType
    _min?: GigsMinAggregateInputType
    _max?: GigsMaxAggregateInputType
  }


  export type GigsGroupByOutputType = {
    id: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features: string[]
    price: number
    shortDesc: string
    createdAt: Date
    images: string[]
    userId: number
    _count: GigsCountAggregateOutputType | null
    _avg: GigsAvgAggregateOutputType | null
    _sum: GigsSumAggregateOutputType | null
    _min: GigsMinAggregateOutputType | null
    _max: GigsMaxAggregateOutputType | null
  }

  type GetGigsGroupByPayload<T extends GigsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GigsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GigsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GigsGroupByOutputType[P]>
            : GetScalarType<T[P], GigsGroupByOutputType[P]>
        }
      >
    >


  export type GigsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    deliveryTime?: boolean
    revisions?: boolean
    features?: boolean
    price?: boolean
    shortDesc?: boolean
    createdAt?: boolean
    images?: boolean
    userId?: boolean
    createdBy?: boolean | UserArgs<ExtArgs>
    orders?: boolean | Gigs$ordersArgs<ExtArgs>
    reviews?: boolean | Gigs$reviewsArgs<ExtArgs>
    transactions?: boolean | Gigs$transactionsArgs<ExtArgs>
    _count?: boolean | GigsCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["gigs"]>

  export type GigsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    deliveryTime?: boolean
    revisions?: boolean
    features?: boolean
    price?: boolean
    shortDesc?: boolean
    createdAt?: boolean
    images?: boolean
    userId?: boolean
  }

  export type GigsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserArgs<ExtArgs>
    orders?: boolean | Gigs$ordersArgs<ExtArgs>
    reviews?: boolean | Gigs$reviewsArgs<ExtArgs>
    transactions?: boolean | Gigs$transactionsArgs<ExtArgs>
    _count?: boolean | GigsCountOutputTypeArgs<ExtArgs>
  }


  type GigsGetPayload<S extends boolean | null | undefined | GigsArgs> = $Types.GetResult<GigsPayload, S>

  type GigsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GigsFindManyArgs, 'select' | 'include'> & {
      select?: GigsCountAggregateInputType | true
    }

  export interface GigsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gigs'], meta: { name: 'Gigs' } }
    /**
     * Find zero or one Gigs that matches the filter.
     * @param {GigsFindUniqueArgs} args - Arguments to find a Gigs
     * @example
     * // Get one Gigs
     * const gigs = await prisma.gigs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GigsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GigsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Gigs'> extends True ? Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Gigs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GigsFindUniqueOrThrowArgs} args - Arguments to find a Gigs
     * @example
     * // Get one Gigs
     * const gigs = await prisma.gigs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GigsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GigsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Gigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsFindFirstArgs} args - Arguments to find a Gigs
     * @example
     * // Get one Gigs
     * const gigs = await prisma.gigs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GigsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GigsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Gigs'> extends True ? Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Gigs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsFindFirstOrThrowArgs} args - Arguments to find a Gigs
     * @example
     * // Get one Gigs
     * const gigs = await prisma.gigs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GigsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GigsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Gigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gigs
     * const gigs = await prisma.gigs.findMany()
     * 
     * // Get first 10 Gigs
     * const gigs = await prisma.gigs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gigsWithIdOnly = await prisma.gigs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GigsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GigsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Gigs.
     * @param {GigsCreateArgs} args - Arguments to create a Gigs.
     * @example
     * // Create one Gigs
     * const Gigs = await prisma.gigs.create({
     *   data: {
     *     // ... data to create a Gigs
     *   }
     * })
     * 
    **/
    create<T extends GigsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GigsCreateArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Gigs.
     *     @param {GigsCreateManyArgs} args - Arguments to create many Gigs.
     *     @example
     *     // Create many Gigs
     *     const gigs = await prisma.gigs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GigsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GigsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gigs.
     * @param {GigsDeleteArgs} args - Arguments to delete one Gigs.
     * @example
     * // Delete one Gigs
     * const Gigs = await prisma.gigs.delete({
     *   where: {
     *     // ... filter to delete one Gigs
     *   }
     * })
     * 
    **/
    delete<T extends GigsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GigsDeleteArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Gigs.
     * @param {GigsUpdateArgs} args - Arguments to update one Gigs.
     * @example
     * // Update one Gigs
     * const gigs = await prisma.gigs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GigsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GigsUpdateArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Gigs.
     * @param {GigsDeleteManyArgs} args - Arguments to filter Gigs to delete.
     * @example
     * // Delete a few Gigs
     * const { count } = await prisma.gigs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GigsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GigsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gigs
     * const gigs = await prisma.gigs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GigsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GigsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gigs.
     * @param {GigsUpsertArgs} args - Arguments to update or create a Gigs.
     * @example
     * // Update or create a Gigs
     * const gigs = await prisma.gigs.upsert({
     *   create: {
     *     // ... data to create a Gigs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gigs we want to update
     *   }
     * })
    **/
    upsert<T extends GigsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GigsUpsertArgs<ExtArgs>>
    ): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsCountArgs} args - Arguments to filter Gigs to count.
     * @example
     * // Count the number of Gigs
     * const count = await prisma.gigs.count({
     *   where: {
     *     // ... the filter for the Gigs we want to count
     *   }
     * })
    **/
    count<T extends GigsCountArgs>(
      args?: Subset<T, GigsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GigsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GigsAggregateArgs>(args: Subset<T, GigsAggregateArgs>): Prisma.PrismaPromise<GetGigsAggregateType<T>>

    /**
     * Group by Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GigsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GigsGroupByArgs['orderBy'] }
        : { orderBy?: GigsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GigsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGigsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Gigs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GigsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    createdBy<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    orders<T extends Gigs$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Gigs$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findMany', never>| Null>;

    reviews<T extends Gigs$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Gigs$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    transactions<T extends Gigs$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Gigs$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Gigs base type for findUnique actions
   */
  export type GigsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where: GigsWhereUniqueInput
  }

  /**
   * Gigs findUnique
   */
  export interface GigsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GigsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Gigs findUniqueOrThrow
   */
  export type GigsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where: GigsWhereUniqueInput
  }


  /**
   * Gigs base type for findFirst actions
   */
  export type GigsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where?: GigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: Enumerable<GigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gigs.
     */
    cursor?: GigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gigs.
     */
    distinct?: Enumerable<GigsScalarFieldEnum>
  }

  /**
   * Gigs findFirst
   */
  export interface GigsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GigsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Gigs findFirstOrThrow
   */
  export type GigsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where?: GigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: Enumerable<GigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gigs.
     */
    cursor?: GigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gigs.
     */
    distinct?: Enumerable<GigsScalarFieldEnum>
  }


  /**
   * Gigs findMany
   */
  export type GigsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where?: GigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: Enumerable<GigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gigs.
     */
    cursor?: GigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    distinct?: Enumerable<GigsScalarFieldEnum>
  }


  /**
   * Gigs create
   */
  export type GigsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * The data needed to create a Gigs.
     */
    data: XOR<GigsCreateInput, GigsUncheckedCreateInput>
  }


  /**
   * Gigs createMany
   */
  export type GigsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gigs.
     */
    data: Enumerable<GigsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Gigs update
   */
  export type GigsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * The data needed to update a Gigs.
     */
    data: XOR<GigsUpdateInput, GigsUncheckedUpdateInput>
    /**
     * Choose, which Gigs to update.
     */
    where: GigsWhereUniqueInput
  }


  /**
   * Gigs updateMany
   */
  export type GigsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gigs.
     */
    data: XOR<GigsUpdateManyMutationInput, GigsUncheckedUpdateManyInput>
    /**
     * Filter which Gigs to update
     */
    where?: GigsWhereInput
  }


  /**
   * Gigs upsert
   */
  export type GigsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * The filter to search for the Gigs to update in case it exists.
     */
    where: GigsWhereUniqueInput
    /**
     * In case the Gigs found by the `where` argument doesn't exist, create a new Gigs with this data.
     */
    create: XOR<GigsCreateInput, GigsUncheckedCreateInput>
    /**
     * In case the Gigs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GigsUpdateInput, GigsUncheckedUpdateInput>
  }


  /**
   * Gigs delete
   */
  export type GigsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
    /**
     * Filter which Gigs to delete.
     */
    where: GigsWhereUniqueInput
  }


  /**
   * Gigs deleteMany
   */
  export type GigsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gigs to delete
     */
    where?: GigsWhereInput
  }


  /**
   * Gigs.orders
   */
  export type Gigs$ordersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Gigs.reviews
   */
  export type Gigs$reviewsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReviewsScalarFieldEnum>
  }


  /**
   * Gigs.transactions
   */
  export type Gigs$transactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }


  /**
   * Gigs without action
   */
  export type GigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gigs
     */
    select?: GigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GigsInclude<ExtArgs> | null
  }



  /**
   * Model Orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    buyerId: number | null
    gigId: number | null
    price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    buyerId: number | null
    gigId: number | null
    price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    buyerId: number | null
    paymentIntent: string | null
    isCompleted: boolean | null
    gigId: number | null
    price: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    buyerId: number | null
    paymentIntent: string | null
    isCompleted: boolean | null
    gigId: number | null
    price: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    createdAt: number
    buyerId: number
    paymentIntent: number
    isCompleted: number
    gigId: number
    price: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    buyerId?: true
    gigId?: true
    price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    buyerId?: true
    gigId?: true
    price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    paymentIntent?: true
    isCompleted?: true
    gigId?: true
    price?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    paymentIntent?: true
    isCompleted?: true
    gigId?: true
    price?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    paymentIntent?: true
    isCompleted?: true
    gigId?: true
    price?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithAggregationInput>
    by: OrdersScalarFieldEnum[]
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: number
    createdAt: Date
    buyerId: number
    paymentIntent: string
    isCompleted: boolean
    gigId: number
    price: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    paymentIntent?: boolean
    isCompleted?: boolean
    gigId?: boolean
    price?: boolean
    buyer?: boolean | UserArgs<ExtArgs>
    gig?: boolean | GigsArgs<ExtArgs>
    messages?: boolean | Orders$messagesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    paymentIntent?: boolean
    isCompleted?: boolean
    gigId?: boolean
    price?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserArgs<ExtArgs>
    gig?: boolean | GigsArgs<ExtArgs>
    messages?: boolean | Orders$messagesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeArgs<ExtArgs>
  }


  type OrdersGetPayload<S extends boolean | null | undefined | OrdersArgs> = $Types.GetResult<OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Orders'> extends True ? Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Orders'> extends True ? Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    buyer<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    gig<T extends GigsArgs<ExtArgs> = {}>(args?: Subset<T, GigsArgs<ExtArgs>>): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    messages<T extends Orders$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Orders$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Orders base type for findUnique actions
   */
  export type OrdersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUnique
   */
  export interface OrdersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrdersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders base type for findFirst actions
   */
  export type OrdersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * Orders findFirst
   */
  export interface OrdersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrdersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: Enumerable<OrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders.messages
   */
  export type Orders$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Orders without action
   */
  export type OrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
  }



  /**
   * Model Reviews
   */


  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    gigId: number | null
    reviewerId: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    gigId: number | null
    reviewerId: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    rating: number | null
    reviewText: string | null
    gigId: number | null
    reviewerId: number | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    rating: number | null
    reviewText: string | null
    gigId: number | null
    reviewerId: number | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    createdAt: number
    rating: number
    reviewText: number
    gigId: number
    reviewerId: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    rating?: true
    gigId?: true
    reviewerId?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    rating?: true
    gigId?: true
    reviewerId?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    createdAt?: true
    rating?: true
    reviewText?: true
    gigId?: true
    reviewerId?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    rating?: true
    reviewText?: true
    gigId?: true
    reviewerId?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    createdAt?: true
    rating?: true
    reviewText?: true
    gigId?: true
    reviewerId?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: Enumerable<ReviewsOrderByWithAggregationInput>
    by: ReviewsScalarFieldEnum[]
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }


  export type ReviewsGroupByOutputType = {
    id: number
    createdAt: Date
    rating: number
    reviewText: string | null
    gigId: number
    reviewerId: number
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    rating?: boolean
    reviewText?: boolean
    gigId?: boolean
    reviewerId?: boolean
    gig?: boolean | GigsArgs<ExtArgs>
    reviewer?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    rating?: boolean
    reviewText?: boolean
    gigId?: boolean
    reviewerId?: boolean
  }

  export type ReviewsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gig?: boolean | GigsArgs<ExtArgs>
    reviewer?: boolean | UserArgs<ExtArgs>
  }


  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsArgs> = $Types.GetResult<ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Reviews'> extends True ? Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Reviews'> extends True ? Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
    **/
    create<T extends ReviewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const reviews = await prisma.reviews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
    **/
    delete<T extends ReviewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Types.GetResult<ReviewsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    gig<T extends GigsArgs<ExtArgs> = {}>(args?: Subset<T, GigsArgs<ExtArgs>>): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    reviewer<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Reviews base type for findUnique actions
   */
  export type ReviewsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUnique
   */
  export interface ReviewsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReviewsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews base type for findFirst actions
   */
  export type ReviewsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewsScalarFieldEnum>
  }

  /**
   * Reviews findFirst
   */
  export interface ReviewsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReviewsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewsScalarFieldEnum>
  }


  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: Enumerable<ReviewsScalarFieldEnum>
  }


  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }


  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: Enumerable<ReviewsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }


  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }


  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }


  /**
   * Reviews without action
   */
  export type ReviewsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    recipientId: number | null
    orderId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    recipientId: number | null
    orderId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    isRead: boolean | null
    senderId: number | null
    recipientId: number | null
    orderId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    isRead: boolean | null
    senderId: number | null
    recipientId: number | null
    orderId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    isRead: number
    senderId: number
    recipientId: number
    orderId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    orderId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    orderId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    isRead?: true
    senderId?: true
    recipientId?: true
    orderId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    isRead?: true
    senderId?: true
    recipientId?: true
    orderId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    isRead?: true
    senderId?: true
    recipientId?: true
    orderId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: MessageScalarFieldEnum[]
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: number
    text: string
    createdAt: Date
    isRead: boolean
    senderId: number
    recipientId: number
    orderId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    isRead?: boolean
    senderId?: boolean
    recipientId?: boolean
    orderId?: boolean
    sender?: boolean | UserArgs<ExtArgs>
    recipient?: boolean | UserArgs<ExtArgs>
    order?: boolean | OrdersArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    isRead?: boolean
    senderId?: boolean
    recipientId?: boolean
    orderId?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sender?: boolean | UserArgs<ExtArgs>
    recipient?: boolean | UserArgs<ExtArgs>
    order?: boolean | OrdersArgs<ExtArgs>
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> = $Types.GetResult<MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sender<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    recipient<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    order<T extends OrdersArgs<ExtArgs> = {}>(args?: Subset<T, OrdersArgs<ExtArgs>>): Prisma__OrdersClient<$Types.GetResult<OrdersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Transaction
   */


  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    buyerId: number | null
    gigId: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    buyerId: number | null
    gigId: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    transactionId: string | null
    buyerId: number | null
    gigId: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    transactionId: string | null
    buyerId: number | null
    gigId: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    transactionId: number
    buyerId: number
    gigId: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    buyerId?: true
    gigId?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    buyerId?: true
    gigId?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    transactionId?: true
    buyerId?: true
    gigId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    transactionId?: true
    buyerId?: true
    gigId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    transactionId?: true
    buyerId?: true
    gigId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: Enumerable<TransactionOrderByWithAggregationInput>
    by: TransactionScalarFieldEnum[]
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }


  export type TransactionGroupByOutputType = {
    id: number
    transactionId: string
    buyerId: number
    gigId: number
    amount: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    buyerId?: boolean
    gigId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserArgs<ExtArgs>
    gig?: boolean | GigsArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    transactionId?: boolean
    buyerId?: boolean
    gigId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserArgs<ExtArgs>
    gig?: boolean | GigsArgs<ExtArgs>
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionArgs> = $Types.GetResult<TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Transaction'> extends True ? Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Transaction'> extends True ? Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    buyer<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    gig<T extends GigsArgs<ExtArgs> = {}>(args?: Subset<T, GigsArgs<ExtArgs>>): Prisma__GigsClient<$Types.GetResult<GigsPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Transaction base type for findUnique actions
   */
  export type TransactionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUnique
   */
  export interface TransactionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TransactionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction base type for findFirst actions
   */
  export type TransactionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }

  /**
   * Transaction findFirst
   */
  export interface TransactionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TransactionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: Enumerable<TransactionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    username: 'username',
    fullName: 'fullName',
    description: 'description',
    profileImage: 'profileImage',
    isProfileInfoSet: 'isProfileInfoSet',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GigsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    deliveryTime: 'deliveryTime',
    revisions: 'revisions',
    features: 'features',
    price: 'price',
    shortDesc: 'shortDesc',
    createdAt: 'createdAt',
    images: 'images',
    userId: 'userId'
  };

  export type GigsScalarFieldEnum = (typeof GigsScalarFieldEnum)[keyof typeof GigsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    buyerId: 'buyerId',
    paymentIntent: 'paymentIntent',
    isCompleted: 'isCompleted',
    gigId: 'gigId',
    price: 'price'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    rating: 'rating',
    reviewText: 'reviewText',
    gigId: 'gigId',
    reviewerId: 'reviewerId'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    isRead: 'isRead',
    senderId: 'senderId',
    recipientId: 'recipientId',
    orderId: 'orderId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    buyerId: 'buyerId',
    gigId: 'gigId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    publicKey?: StringFilter | string
    username?: StringNullableFilter | string | null
    fullName?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    profileImage?: StringNullableFilter | string | null
    isProfileInfoSet?: BoolNullableFilter | boolean | null
    createdAt?: DateTimeFilter | Date | string
    gigs?: GigsListRelationFilter
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    isProfileInfoSet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    gigs?: GigsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    publicKey?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    isProfileInfoSet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    publicKey?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    fullName?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    profileImage?: StringNullableWithAggregatesFilter | string | null
    isProfileInfoSet?: BoolNullableWithAggregatesFilter | boolean | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GigsWhereInput = {
    AND?: Enumerable<GigsWhereInput>
    OR?: Enumerable<GigsWhereInput>
    NOT?: Enumerable<GigsWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    category?: StringFilter | string
    deliveryTime?: IntFilter | number
    revisions?: IntFilter | number
    features?: StringNullableListFilter
    price?: IntFilter | number
    shortDesc?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    images?: StringNullableListFilter
    userId?: IntFilter | number
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type GigsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    features?: SortOrder
    price?: SortOrder
    shortDesc?: SortOrder
    createdAt?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    orders?: OrdersOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type GigsWhereUniqueInput = {
    id?: number
  }

  export type GigsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    features?: SortOrder
    price?: SortOrder
    shortDesc?: SortOrder
    createdAt?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    _count?: GigsCountOrderByAggregateInput
    _avg?: GigsAvgOrderByAggregateInput
    _max?: GigsMaxOrderByAggregateInput
    _min?: GigsMinOrderByAggregateInput
    _sum?: GigsSumOrderByAggregateInput
  }

  export type GigsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GigsScalarWhereWithAggregatesInput>
    OR?: Enumerable<GigsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GigsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    deliveryTime?: IntWithAggregatesFilter | number
    revisions?: IntWithAggregatesFilter | number
    features?: StringNullableListFilter
    price?: IntWithAggregatesFilter | number
    shortDesc?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    images?: StringNullableListFilter
    userId?: IntWithAggregatesFilter | number
  }

  export type OrdersWhereInput = {
    AND?: Enumerable<OrdersWhereInput>
    OR?: Enumerable<OrdersWhereInput>
    NOT?: Enumerable<OrdersWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    buyerId?: IntFilter | number
    paymentIntent?: StringFilter | string
    isCompleted?: BoolFilter | boolean
    gigId?: IntFilter | number
    price?: IntFilter | number
    buyer?: XOR<UserRelationFilter, UserWhereInput>
    gig?: XOR<GigsRelationFilter, GigsWhereInput>
    messages?: MessageListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    paymentIntent?: SortOrder
    isCompleted?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
    buyer?: UserOrderByWithRelationInput
    gig?: GigsOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = {
    id?: number
    paymentIntent?: string
  }

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    paymentIntent?: SortOrder
    isCompleted?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    buyerId?: IntWithAggregatesFilter | number
    paymentIntent?: StringWithAggregatesFilter | string
    isCompleted?: BoolWithAggregatesFilter | boolean
    gigId?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
  }

  export type ReviewsWhereInput = {
    AND?: Enumerable<ReviewsWhereInput>
    OR?: Enumerable<ReviewsWhereInput>
    NOT?: Enumerable<ReviewsWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    rating?: IntFilter | number
    reviewText?: StringNullableFilter | string | null
    gigId?: IntFilter | number
    reviewerId?: IntFilter | number
    gig?: XOR<GigsRelationFilter, GigsWhereInput>
    reviewer?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    reviewText?: SortOrderInput | SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
    gig?: GigsOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = {
    id?: number
  }

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    reviewText?: SortOrderInput | SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReviewsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReviewsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReviewsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    rating?: IntWithAggregatesFilter | number
    reviewText?: StringNullableWithAggregatesFilter | string | null
    gigId?: IntWithAggregatesFilter | number
    reviewerId?: IntWithAggregatesFilter | number
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    isRead?: BoolFilter | boolean
    senderId?: IntFilter | number
    recipientId?: IntFilter | number
    orderId?: IntFilter | number
    sender?: XOR<UserRelationFilter, UserWhereInput>
    recipient?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = {
    id?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    isRead?: BoolWithAggregatesFilter | boolean
    senderId?: IntWithAggregatesFilter | number
    recipientId?: IntWithAggregatesFilter | number
    orderId?: IntWithAggregatesFilter | number
  }

  export type TransactionWhereInput = {
    AND?: Enumerable<TransactionWhereInput>
    OR?: Enumerable<TransactionWhereInput>
    NOT?: Enumerable<TransactionWhereInput>
    id?: IntFilter | number
    transactionId?: StringFilter | string
    buyerId?: IntFilter | number
    gigId?: IntFilter | number
    amount?: FloatFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    buyer?: XOR<UserRelationFilter, UserWhereInput>
    gig?: XOR<GigsRelationFilter, GigsWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buyer?: UserOrderByWithRelationInput
    gig?: GigsOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = {
    id?: number
  }

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    transactionId?: StringWithAggregatesFilter | string
    buyerId?: IntWithAggregatesFilter | number
    gigId?: IntWithAggregatesFilter | number
    amount?: FloatWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserUpdateInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigsCreateInput = {
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    createdBy: UserCreateNestedOneWithoutGigsInput
    orders?: OrdersCreateNestedManyWithoutGigInput
    reviews?: ReviewsCreateNestedManyWithoutGigInput
    transactions?: TransactionCreateNestedManyWithoutGigInput
  }

  export type GigsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    userId: number
    orders?: OrdersUncheckedCreateNestedManyWithoutGigInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutGigInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGigInput
  }

  export type GigsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    createdBy?: UserUpdateOneRequiredWithoutGigsNestedInput
    orders?: OrdersUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUpdateManyWithoutGigNestedInput
    transactions?: TransactionUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrdersUncheckedUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutGigNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGigNestedInput
  }

  export type GigsCreateManyInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    userId: number
  }

  export type GigsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
  }

  export type GigsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    price: number
    buyer: UserCreateNestedOneWithoutOrdersInput
    gig: GigsCreateNestedOneWithoutOrdersInput
    messages?: MessageCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    buyerId: number
    paymentIntent: string
    isCompleted?: boolean
    gigId: number
    price: number
    messages?: MessageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    gig?: GigsUpdateOneRequiredWithoutOrdersNestedInput
    messages?: MessageUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: IntFieldUpdateOperationsInput | number
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    gigId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    createdAt?: Date | string
    buyerId: number
    paymentIntent: string
    isCompleted?: boolean
    gigId: number
    price: number
  }

  export type OrdersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: IntFieldUpdateOperationsInput | number
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    gigId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateInput = {
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gig: GigsCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gigId: number
    reviewerId: number
  }

  export type ReviewsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gig?: GigsUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gigId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gigId: number
    reviewerId: number
  }

  export type ReviewsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gigId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutMessagesSentInput
    recipient: UserCreateNestedOneWithoutMessagesReceivedInput
    order: OrdersCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    recipientId: number
    orderId: number
  }

  export type MessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
    order?: OrdersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    recipientId: number
    orderId: number
  }

  export type MessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    transactionId: string
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutTransactionsInput
    gig: GigsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    transactionId: string
    buyerId: number
    gigId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    gig?: GigsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    buyerId?: IntFieldUpdateOperationsInput | number
    gigId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    transactionId: string
    buyerId: number
    gigId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    buyerId?: IntFieldUpdateOperationsInput | number
    gigId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type GigsListRelationFilter = {
    every?: GigsWhereInput
    some?: GigsWhereInput
    none?: GigsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GigsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    profileImage?: SortOrder
    isProfileInfoSet?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    profileImage?: SortOrder
    isProfileInfoSet?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    profileImage?: SortOrder
    isProfileInfoSet?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GigsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    features?: SortOrder
    price?: SortOrder
    shortDesc?: SortOrder
    createdAt?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type GigsAvgOrderByAggregateInput = {
    id?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type GigsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    price?: SortOrder
    shortDesc?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type GigsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    price?: SortOrder
    shortDesc?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type GigsSumOrderByAggregateInput = {
    id?: SortOrder
    deliveryTime?: SortOrder
    revisions?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type GigsRelationFilter = {
    is?: GigsWhereInput | null
    isNot?: GigsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    paymentIntent?: SortOrder
    isCompleted?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    paymentIntent?: SortOrder
    isCompleted?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    paymentIntent?: SortOrder
    isCompleted?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    reviewText?: SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    reviewText?: SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    reviewText?: SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    gigId?: SortOrder
    reviewerId?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    orderId?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    gigId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type GigsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<GigsCreateWithoutCreatedByInput>, Enumerable<GigsUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<GigsCreateOrConnectWithoutCreatedByInput>
    createMany?: GigsCreateManyCreatedByInputEnvelope
    connect?: Enumerable<GigsWhereUniqueInput>
  }

  export type OrdersCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutBuyerInput>, Enumerable<OrdersUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutBuyerInput>
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: Enumerable<OrdersWhereUniqueInput>
  }

  export type ReviewsCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutReviewerInput>, Enumerable<ReviewsUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutReviewerInput>
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    connect?: Enumerable<ReviewsWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutRecipientInput = {
    create?: XOR<Enumerable<MessageCreateWithoutRecipientInput>, Enumerable<MessageUncheckedCreateWithoutRecipientInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutRecipientInput>
    createMany?: MessageCreateManyRecipientInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type TransactionCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutBuyerInput>, Enumerable<TransactionUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutBuyerInput>
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type GigsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<GigsCreateWithoutCreatedByInput>, Enumerable<GigsUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<GigsCreateOrConnectWithoutCreatedByInput>
    createMany?: GigsCreateManyCreatedByInputEnvelope
    connect?: Enumerable<GigsWhereUniqueInput>
  }

  export type OrdersUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutBuyerInput>, Enumerable<OrdersUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutBuyerInput>
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: Enumerable<OrdersWhereUniqueInput>
  }

  export type ReviewsUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutReviewerInput>, Enumerable<ReviewsUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutReviewerInput>
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    connect?: Enumerable<ReviewsWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<Enumerable<MessageCreateWithoutRecipientInput>, Enumerable<MessageUncheckedCreateWithoutRecipientInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutRecipientInput>
    createMany?: MessageCreateManyRecipientInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutBuyerInput>, Enumerable<TransactionUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutBuyerInput>
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GigsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<GigsCreateWithoutCreatedByInput>, Enumerable<GigsUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<GigsCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<GigsUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: GigsCreateManyCreatedByInputEnvelope
    set?: Enumerable<GigsWhereUniqueInput>
    disconnect?: Enumerable<GigsWhereUniqueInput>
    delete?: Enumerable<GigsWhereUniqueInput>
    connect?: Enumerable<GigsWhereUniqueInput>
    update?: Enumerable<GigsUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<GigsUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<GigsScalarWhereInput>
  }

  export type OrdersUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutBuyerInput>, Enumerable<OrdersUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<OrdersUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: Enumerable<OrdersWhereUniqueInput>
    disconnect?: Enumerable<OrdersWhereUniqueInput>
    delete?: Enumerable<OrdersWhereUniqueInput>
    connect?: Enumerable<OrdersWhereUniqueInput>
    update?: Enumerable<OrdersUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<OrdersUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<OrdersScalarWhereInput>
  }

  export type ReviewsUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutReviewerInput>, Enumerable<ReviewsUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<ReviewsUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    set?: Enumerable<ReviewsWhereUniqueInput>
    disconnect?: Enumerable<ReviewsWhereUniqueInput>
    delete?: Enumerable<ReviewsWhereUniqueInput>
    connect?: Enumerable<ReviewsWhereUniqueInput>
    update?: Enumerable<ReviewsUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<ReviewsUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<ReviewsScalarWhereInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutRecipientInput>, Enumerable<MessageUncheckedCreateWithoutRecipientInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutRecipientInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutRecipientInput>
    createMany?: MessageCreateManyRecipientInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutRecipientInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutRecipientInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type TransactionUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutBuyerInput>, Enumerable<TransactionUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GigsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<GigsCreateWithoutCreatedByInput>, Enumerable<GigsUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<GigsCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<GigsUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: GigsCreateManyCreatedByInputEnvelope
    set?: Enumerable<GigsWhereUniqueInput>
    disconnect?: Enumerable<GigsWhereUniqueInput>
    delete?: Enumerable<GigsWhereUniqueInput>
    connect?: Enumerable<GigsWhereUniqueInput>
    update?: Enumerable<GigsUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<GigsUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<GigsScalarWhereInput>
  }

  export type OrdersUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutBuyerInput>, Enumerable<OrdersUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<OrdersUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: Enumerable<OrdersWhereUniqueInput>
    disconnect?: Enumerable<OrdersWhereUniqueInput>
    delete?: Enumerable<OrdersWhereUniqueInput>
    connect?: Enumerable<OrdersWhereUniqueInput>
    update?: Enumerable<OrdersUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<OrdersUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<OrdersScalarWhereInput>
  }

  export type ReviewsUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutReviewerInput>, Enumerable<ReviewsUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<ReviewsUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    set?: Enumerable<ReviewsWhereUniqueInput>
    disconnect?: Enumerable<ReviewsWhereUniqueInput>
    delete?: Enumerable<ReviewsWhereUniqueInput>
    connect?: Enumerable<ReviewsWhereUniqueInput>
    update?: Enumerable<ReviewsUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<ReviewsUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<ReviewsScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutRecipientInput>, Enumerable<MessageUncheckedCreateWithoutRecipientInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutRecipientInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutRecipientInput>
    createMany?: MessageCreateManyRecipientInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutRecipientInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutRecipientInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutBuyerInput>, Enumerable<TransactionUncheckedCreateWithoutBuyerInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutBuyerInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutBuyerInput>
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutBuyerInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutBuyerInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type GigsCreatefeaturesInput = {
    set: Enumerable<string>
  }

  export type GigsCreateimagesInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutGigsInput = {
    create?: XOR<UserCreateWithoutGigsInput, UserUncheckedCreateWithoutGigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGigsInput
    connect?: UserWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutGigInput>, Enumerable<OrdersUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutGigInput>
    createMany?: OrdersCreateManyGigInputEnvelope
    connect?: Enumerable<OrdersWhereUniqueInput>
  }

  export type ReviewsCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutGigInput>, Enumerable<ReviewsUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutGigInput>
    createMany?: ReviewsCreateManyGigInputEnvelope
    connect?: Enumerable<ReviewsWhereUniqueInput>
  }

  export type TransactionCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutGigInput>, Enumerable<TransactionUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutGigInput>
    createMany?: TransactionCreateManyGigInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type OrdersUncheckedCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutGigInput>, Enumerable<OrdersUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutGigInput>
    createMany?: OrdersCreateManyGigInputEnvelope
    connect?: Enumerable<OrdersWhereUniqueInput>
  }

  export type ReviewsUncheckedCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutGigInput>, Enumerable<ReviewsUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutGigInput>
    createMany?: ReviewsCreateManyGigInputEnvelope
    connect?: Enumerable<ReviewsWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutGigInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutGigInput>, Enumerable<TransactionUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutGigInput>
    createMany?: TransactionCreateManyGigInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type GigsUpdatefeaturesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type GigsUpdateimagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutGigsNestedInput = {
    create?: XOR<UserCreateWithoutGigsInput, UserUncheckedCreateWithoutGigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGigsInput
    upsert?: UserUpsertWithoutGigsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGigsInput, UserUncheckedUpdateWithoutGigsInput>
  }

  export type OrdersUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutGigInput>, Enumerable<OrdersUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<OrdersUpsertWithWhereUniqueWithoutGigInput>
    createMany?: OrdersCreateManyGigInputEnvelope
    set?: Enumerable<OrdersWhereUniqueInput>
    disconnect?: Enumerable<OrdersWhereUniqueInput>
    delete?: Enumerable<OrdersWhereUniqueInput>
    connect?: Enumerable<OrdersWhereUniqueInput>
    update?: Enumerable<OrdersUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<OrdersUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<OrdersScalarWhereInput>
  }

  export type ReviewsUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutGigInput>, Enumerable<ReviewsUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<ReviewsUpsertWithWhereUniqueWithoutGigInput>
    createMany?: ReviewsCreateManyGigInputEnvelope
    set?: Enumerable<ReviewsWhereUniqueInput>
    disconnect?: Enumerable<ReviewsWhereUniqueInput>
    delete?: Enumerable<ReviewsWhereUniqueInput>
    connect?: Enumerable<ReviewsWhereUniqueInput>
    update?: Enumerable<ReviewsUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<ReviewsUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<ReviewsScalarWhereInput>
  }

  export type TransactionUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutGigInput>, Enumerable<TransactionUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutGigInput>
    createMany?: TransactionCreateManyGigInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type OrdersUncheckedUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<OrdersCreateWithoutGigInput>, Enumerable<OrdersUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<OrdersCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<OrdersUpsertWithWhereUniqueWithoutGigInput>
    createMany?: OrdersCreateManyGigInputEnvelope
    set?: Enumerable<OrdersWhereUniqueInput>
    disconnect?: Enumerable<OrdersWhereUniqueInput>
    delete?: Enumerable<OrdersWhereUniqueInput>
    connect?: Enumerable<OrdersWhereUniqueInput>
    update?: Enumerable<OrdersUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<OrdersUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<OrdersScalarWhereInput>
  }

  export type ReviewsUncheckedUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<ReviewsCreateWithoutGigInput>, Enumerable<ReviewsUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<ReviewsCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<ReviewsUpsertWithWhereUniqueWithoutGigInput>
    createMany?: ReviewsCreateManyGigInputEnvelope
    set?: Enumerable<ReviewsWhereUniqueInput>
    disconnect?: Enumerable<ReviewsWhereUniqueInput>
    delete?: Enumerable<ReviewsWhereUniqueInput>
    connect?: Enumerable<ReviewsWhereUniqueInput>
    update?: Enumerable<ReviewsUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<ReviewsUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<ReviewsScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutGigNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutGigInput>, Enumerable<TransactionUncheckedCreateWithoutGigInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutGigInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutGigInput>
    createMany?: TransactionCreateManyGigInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutGigInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutGigInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type GigsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<GigsCreateWithoutOrdersInput, GigsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: GigsCreateOrConnectWithoutOrdersInput
    connect?: GigsWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutOrderInput>, Enumerable<MessageUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutOrderInput>
    createMany?: MessageCreateManyOrderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutOrderInput>, Enumerable<MessageUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutOrderInput>
    createMany?: MessageCreateManyOrderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type GigsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<GigsCreateWithoutOrdersInput, GigsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: GigsCreateOrConnectWithoutOrdersInput
    upsert?: GigsUpsertWithoutOrdersInput
    connect?: GigsWhereUniqueInput
    update?: XOR<GigsUpdateWithoutOrdersInput, GigsUncheckedUpdateWithoutOrdersInput>
  }

  export type MessageUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutOrderInput>, Enumerable<MessageUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: MessageCreateManyOrderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutOrderInput>, Enumerable<MessageUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: MessageCreateManyOrderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type GigsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<GigsCreateWithoutReviewsInput, GigsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GigsCreateOrConnectWithoutReviewsInput
    connect?: GigsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type GigsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<GigsCreateWithoutReviewsInput, GigsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GigsCreateOrConnectWithoutReviewsInput
    upsert?: GigsUpsertWithoutReviewsInput
    connect?: GigsWhereUniqueInput
    update?: XOR<GigsUpdateWithoutReviewsInput, GigsUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<OrdersCreateWithoutMessagesInput, OrdersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutMessagesInput
    connect?: OrdersWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type OrdersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<OrdersCreateWithoutMessagesInput, OrdersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutMessagesInput
    upsert?: OrdersUpsertWithoutMessagesInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<OrdersUpdateWithoutMessagesInput, OrdersUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type GigsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GigsCreateWithoutTransactionsInput, GigsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GigsCreateOrConnectWithoutTransactionsInput
    connect?: GigsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type GigsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<GigsCreateWithoutTransactionsInput, GigsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GigsCreateOrConnectWithoutTransactionsInput
    upsert?: GigsUpsertWithoutTransactionsInput
    connect?: GigsWhereUniqueInput
    update?: XOR<GigsUpdateWithoutTransactionsInput, GigsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type GigsCreateWithoutCreatedByInput = {
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    orders?: OrdersCreateNestedManyWithoutGigInput
    reviews?: ReviewsCreateNestedManyWithoutGigInput
    transactions?: TransactionCreateNestedManyWithoutGigInput
  }

  export type GigsUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    orders?: OrdersUncheckedCreateNestedManyWithoutGigInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutGigInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGigInput
  }

  export type GigsCreateOrConnectWithoutCreatedByInput = {
    where: GigsWhereUniqueInput
    create: XOR<GigsCreateWithoutCreatedByInput, GigsUncheckedCreateWithoutCreatedByInput>
  }

  export type GigsCreateManyCreatedByInputEnvelope = {
    data: Enumerable<GigsCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutBuyerInput = {
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    price: number
    gig: GigsCreateNestedOneWithoutOrdersInput
    messages?: MessageCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutBuyerInput = {
    id?: number
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    gigId: number
    price: number
    messages?: MessageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersCreateManyBuyerInputEnvelope = {
    data: Enumerable<OrdersCreateManyBuyerInput>
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutReviewerInput = {
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gig: GigsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutReviewerInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gigId: number
  }

  export type ReviewsCreateOrConnectWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewsCreateManyReviewerInputEnvelope = {
    data: Enumerable<ReviewsCreateManyReviewerInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    recipient: UserCreateNestedOneWithoutMessagesReceivedInput
    order: OrdersCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    recipientId: number
    orderId: number
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: Enumerable<MessageCreateManySenderInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRecipientInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutMessagesSentInput
    order: OrdersCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutRecipientInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    orderId: number
  }

  export type MessageCreateOrConnectWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type MessageCreateManyRecipientInputEnvelope = {
    data: Enumerable<MessageCreateManyRecipientInput>
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBuyerInput = {
    transactionId: string
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gig: GigsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutBuyerInput = {
    id?: number
    transactionId: string
    gigId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionCreateManyBuyerInputEnvelope = {
    data: Enumerable<TransactionCreateManyBuyerInput>
    skipDuplicates?: boolean
  }

  export type GigsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: GigsWhereUniqueInput
    update: XOR<GigsUpdateWithoutCreatedByInput, GigsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<GigsCreateWithoutCreatedByInput, GigsUncheckedCreateWithoutCreatedByInput>
  }

  export type GigsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: GigsWhereUniqueInput
    data: XOR<GigsUpdateWithoutCreatedByInput, GigsUncheckedUpdateWithoutCreatedByInput>
  }

  export type GigsUpdateManyWithWhereWithoutCreatedByInput = {
    where: GigsScalarWhereInput
    data: XOR<GigsUpdateManyMutationInput, GigsUncheckedUpdateManyWithoutGigsInput>
  }

  export type GigsScalarWhereInput = {
    AND?: Enumerable<GigsScalarWhereInput>
    OR?: Enumerable<GigsScalarWhereInput>
    NOT?: Enumerable<GigsScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    category?: StringFilter | string
    deliveryTime?: IntFilter | number
    revisions?: IntFilter | number
    features?: StringNullableListFilter
    price?: IntFilter | number
    shortDesc?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    images?: StringNullableListFilter
    userId?: IntFilter | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBuyerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: Enumerable<OrdersScalarWhereInput>
    OR?: Enumerable<OrdersScalarWhereInput>
    NOT?: Enumerable<OrdersScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    buyerId?: IntFilter | number
    paymentIntent?: StringFilter | string
    isCompleted?: BoolFilter | boolean
    gigId?: IntFilter | number
    price?: IntFilter | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutReviewerInput, ReviewsUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutReviewerInput, ReviewsUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: Enumerable<ReviewsScalarWhereInput>
    OR?: Enumerable<ReviewsScalarWhereInput>
    NOT?: Enumerable<ReviewsScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    rating?: IntFilter | number
    reviewText?: StringNullableFilter | string | null
    gigId?: IntFilter | number
    reviewerId?: IntFilter | number
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesSentInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    isRead?: BoolFilter | boolean
    senderId?: IntFilter | number
    recipientId?: IntFilter | number
    orderId?: IntFilter | number
  }

  export type MessageUpsertWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecipientInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesReceivedInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBuyerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: Enumerable<TransactionScalarWhereInput>
    OR?: Enumerable<TransactionScalarWhereInput>
    NOT?: Enumerable<TransactionScalarWhereInput>
    id?: IntFilter | number
    transactionId?: StringFilter | string
    buyerId?: IntFilter | number
    gigId?: IntFilter | number
    amount?: FloatFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutGigsInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutGigsInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutGigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGigsInput, UserUncheckedCreateWithoutGigsInput>
  }

  export type OrdersCreateWithoutGigInput = {
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    price: number
    buyer: UserCreateNestedOneWithoutOrdersInput
    messages?: MessageCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutGigInput = {
    id?: number
    createdAt?: Date | string
    buyerId: number
    paymentIntent: string
    isCompleted?: boolean
    price: number
    messages?: MessageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutGigInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutGigInput, OrdersUncheckedCreateWithoutGigInput>
  }

  export type OrdersCreateManyGigInputEnvelope = {
    data: Enumerable<OrdersCreateManyGigInput>
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutGigInput = {
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutGigInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    reviewerId: number
  }

  export type ReviewsCreateOrConnectWithoutGigInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutGigInput, ReviewsUncheckedCreateWithoutGigInput>
  }

  export type ReviewsCreateManyGigInputEnvelope = {
    data: Enumerable<ReviewsCreateManyGigInput>
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutGigInput = {
    transactionId: string
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutGigInput = {
    id?: number
    transactionId: string
    buyerId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutGigInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGigInput, TransactionUncheckedCreateWithoutGigInput>
  }

  export type TransactionCreateManyGigInputEnvelope = {
    data: Enumerable<TransactionCreateManyGigInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGigsInput = {
    update: XOR<UserUpdateWithoutGigsInput, UserUncheckedUpdateWithoutGigsInput>
    create: XOR<UserCreateWithoutGigsInput, UserUncheckedCreateWithoutGigsInput>
  }

  export type UserUpdateWithoutGigsInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutGigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type OrdersUpsertWithWhereUniqueWithoutGigInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutGigInput, OrdersUncheckedUpdateWithoutGigInput>
    create: XOR<OrdersCreateWithoutGigInput, OrdersUncheckedCreateWithoutGigInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutGigInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutGigInput, OrdersUncheckedUpdateWithoutGigInput>
  }

  export type OrdersUpdateManyWithWhereWithoutGigInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutGigInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutGigInput, ReviewsUncheckedUpdateWithoutGigInput>
    create: XOR<ReviewsCreateWithoutGigInput, ReviewsUncheckedCreateWithoutGigInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutGigInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutGigInput, ReviewsUncheckedUpdateWithoutGigInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutGigInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutReviewsInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutGigInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutGigInput, TransactionUncheckedUpdateWithoutGigInput>
    create: XOR<TransactionCreateWithoutGigInput, TransactionUncheckedCreateWithoutGigInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutGigInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutGigInput, TransactionUncheckedUpdateWithoutGigInput>
  }

  export type TransactionUpdateManyWithWhereWithoutGigInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type UserCreateWithoutOrdersInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type GigsCreateWithoutOrdersInput = {
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    createdBy: UserCreateNestedOneWithoutGigsInput
    reviews?: ReviewsCreateNestedManyWithoutGigInput
    transactions?: TransactionCreateNestedManyWithoutGigInput
  }

  export type GigsUncheckedCreateWithoutOrdersInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    userId: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutGigInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGigInput
  }

  export type GigsCreateOrConnectWithoutOrdersInput = {
    where: GigsWhereUniqueInput
    create: XOR<GigsCreateWithoutOrdersInput, GigsUncheckedCreateWithoutOrdersInput>
  }

  export type MessageCreateWithoutOrderInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutMessagesSentInput
    recipient: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutOrderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    recipientId: number
  }

  export type MessageCreateOrConnectWithoutOrderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutOrderInput, MessageUncheckedCreateWithoutOrderInput>
  }

  export type MessageCreateManyOrderInputEnvelope = {
    data: Enumerable<MessageCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type GigsUpsertWithoutOrdersInput = {
    update: XOR<GigsUpdateWithoutOrdersInput, GigsUncheckedUpdateWithoutOrdersInput>
    create: XOR<GigsCreateWithoutOrdersInput, GigsUncheckedCreateWithoutOrdersInput>
  }

  export type GigsUpdateWithoutOrdersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    createdBy?: UserUpdateOneRequiredWithoutGigsNestedInput
    reviews?: ReviewsUpdateManyWithoutGigNestedInput
    transactions?: TransactionUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    userId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutGigNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGigNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutOrderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutOrderInput, MessageUncheckedUpdateWithoutOrderInput>
    create: XOR<MessageCreateWithoutOrderInput, MessageUncheckedCreateWithoutOrderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutOrderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutOrderInput, MessageUncheckedUpdateWithoutOrderInput>
  }

  export type MessageUpdateManyWithWhereWithoutOrderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type GigsCreateWithoutReviewsInput = {
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    createdBy: UserCreateNestedOneWithoutGigsInput
    orders?: OrdersCreateNestedManyWithoutGigInput
    transactions?: TransactionCreateNestedManyWithoutGigInput
  }

  export type GigsUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    userId: number
    orders?: OrdersUncheckedCreateNestedManyWithoutGigInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGigInput
  }

  export type GigsCreateOrConnectWithoutReviewsInput = {
    where: GigsWhereUniqueInput
    create: XOR<GigsCreateWithoutReviewsInput, GigsUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type GigsUpsertWithoutReviewsInput = {
    update: XOR<GigsUpdateWithoutReviewsInput, GigsUncheckedUpdateWithoutReviewsInput>
    create: XOR<GigsCreateWithoutReviewsInput, GigsUncheckedCreateWithoutReviewsInput>
  }

  export type GigsUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    createdBy?: UserUpdateOneRequiredWithoutGigsNestedInput
    orders?: OrdersUpdateManyWithoutGigNestedInput
    transactions?: TransactionUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrdersUncheckedUpdateManyWithoutGigNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGigNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    transactions?: TransactionCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type OrdersCreateWithoutMessagesInput = {
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    price: number
    buyer: UserCreateNestedOneWithoutOrdersInput
    gig: GigsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt?: Date | string
    buyerId: number
    paymentIntent: string
    isCompleted?: boolean
    gigId: number
    price: number
  }

  export type OrdersCreateOrConnectWithoutMessagesInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutMessagesInput, OrdersUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type OrdersUpsertWithoutMessagesInput = {
    update: XOR<OrdersUpdateWithoutMessagesInput, OrdersUncheckedUpdateWithoutMessagesInput>
    create: XOR<OrdersCreateWithoutMessagesInput, OrdersUncheckedCreateWithoutMessagesInput>
  }

  export type OrdersUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    gig?: GigsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: IntFieldUpdateOperationsInput | number
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    gigId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutTransactionsInput = {
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsCreateNestedManyWithoutCreatedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    publicKey: string
    username?: string | null
    fullName?: string | null
    description?: string | null
    profileImage?: string | null
    isProfileInfoSet?: boolean | null
    createdAt?: Date | string
    gigs?: GigsUncheckedCreateNestedManyWithoutCreatedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type GigsCreateWithoutTransactionsInput = {
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    createdBy: UserCreateNestedOneWithoutGigsInput
    orders?: OrdersCreateNestedManyWithoutGigInput
    reviews?: ReviewsCreateNestedManyWithoutGigInput
  }

  export type GigsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
    userId: number
    orders?: OrdersUncheckedCreateNestedManyWithoutGigInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutGigInput
  }

  export type GigsCreateOrConnectWithoutTransactionsInput = {
    where: GigsWhereUniqueInput
    create: XOR<GigsCreateWithoutTransactionsInput, GigsUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileInfoSet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gigs?: GigsUncheckedUpdateManyWithoutCreatedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type GigsUpsertWithoutTransactionsInput = {
    update: XOR<GigsUpdateWithoutTransactionsInput, GigsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GigsCreateWithoutTransactionsInput, GigsUncheckedCreateWithoutTransactionsInput>
  }

  export type GigsUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    createdBy?: UserUpdateOneRequiredWithoutGigsNestedInput
    orders?: OrdersUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrdersUncheckedUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutGigNestedInput
  }

  export type GigsCreateManyCreatedByInput = {
    id?: number
    title: string
    description: string
    category: string
    deliveryTime: number
    revisions: number
    features?: GigsCreatefeaturesInput | Enumerable<string>
    price: number
    shortDesc: string
    createdAt?: Date | string
    images?: GigsCreateimagesInput | Enumerable<string>
  }

  export type OrdersCreateManyBuyerInput = {
    id?: number
    createdAt?: Date | string
    paymentIntent: string
    isCompleted?: boolean
    gigId: number
    price: number
  }

  export type ReviewsCreateManyReviewerInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    gigId: number
  }

  export type MessageCreateManySenderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    recipientId: number
    orderId: number
  }

  export type MessageCreateManyRecipientInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    orderId: number
  }

  export type TransactionCreateManyBuyerInput = {
    id?: number
    transactionId: string
    gigId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigsUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    orders?: OrdersUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUpdateManyWithoutGigNestedInput
    transactions?: TransactionUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
    orders?: OrdersUncheckedUpdateManyWithoutGigNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutGigNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGigNestedInput
  }

  export type GigsUncheckedUpdateManyWithoutGigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deliveryTime?: IntFieldUpdateOperationsInput | number
    revisions?: IntFieldUpdateOperationsInput | number
    features?: GigsUpdatefeaturesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    shortDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GigsUpdateimagesInput | Enumerable<string>
  }

  export type OrdersUpdateWithoutBuyerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    gig?: GigsUpdateOneRequiredWithoutOrdersNestedInput
    messages?: MessageUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    gigId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    gigId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutReviewerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gig?: GigsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gigId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    gigId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutSenderInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    recipient?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
    order?: OrdersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    recipientId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    recipientId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutRecipientInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    order?: OrdersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutBuyerInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gig?: GigsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    gigId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    gigId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyGigInput = {
    id?: number
    createdAt?: Date | string
    buyerId: number
    paymentIntent: string
    isCompleted?: boolean
    price: number
  }

  export type ReviewsCreateManyGigInput = {
    id?: number
    createdAt?: Date | string
    rating: number
    reviewText?: string | null
    reviewerId: number
  }

  export type TransactionCreateManyGigInput = {
    id?: number
    transactionId: string
    buyerId: number
    amount: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutGigInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    messages?: MessageUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutGigInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: IntFieldUpdateOperationsInput | number
    paymentIntent?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ReviewsUpdateWithoutGigInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutGigInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    reviewText?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutGigInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGigInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    buyerId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyOrderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    isRead?: boolean
    senderId: number
    recipientId: number
  }

  export type MessageUpdateWithoutOrderInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}