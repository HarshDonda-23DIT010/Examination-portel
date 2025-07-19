
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Year
 * 
 */
export type Year = $Result.DefaultSelection<Prisma.$YearPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model SubjectFaculty
 * 
 */
export type SubjectFaculty = $Result.DefaultSelection<Prisma.$SubjectFacultyPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Marks
 * 
 */
export type Marks = $Result.DefaultSelection<Prisma.$MarksPayload>
/**
 * Model Detain
 * 
 */
export type Detain = $Result.DefaultSelection<Prisma.$DetainPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Department: {
  DCS: 'DCS',
  DIT: 'DIT',
  DCE: 'DCE'
};

export type Department = (typeof Department)[keyof typeof Department]


export const UserRole: {
  Faculty: 'Faculty',
  HOD: 'HOD',
  Admin: 'Admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SubjectType: {
  major: 'major',
  elective: 'elective',
  universityElective: 'universityElective'
};

export type SubjectType = (typeof SubjectType)[keyof typeof SubjectType]


export const SubjectFacultyRole: {
  SubjectCoordinator: 'SubjectCoordinator',
  Faculty: 'Faculty'
};

export type SubjectFacultyRole = (typeof SubjectFacultyRole)[keyof typeof SubjectFacultyRole]


export const ExamStatus: {
  taken: 'taken',
  notTaken: 'notTaken',
  pending: 'pending'
};

export type ExamStatus = (typeof ExamStatus)[keyof typeof ExamStatus]

}

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SubjectType = $Enums.SubjectType

export const SubjectType: typeof $Enums.SubjectType

export type SubjectFacultyRole = $Enums.SubjectFacultyRole

export const SubjectFacultyRole: typeof $Enums.SubjectFacultyRole

export type ExamStatus = $Enums.ExamStatus

export const ExamStatus: typeof $Enums.ExamStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Years
 * const years = await prisma.year.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Years
   * const years = await prisma.year.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.year`: Exposes CRUD operations for the **Year** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Years
    * const years = await prisma.year.findMany()
    * ```
    */
  get year(): Prisma.YearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectFaculty`: Exposes CRUD operations for the **SubjectFaculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectFaculties
    * const subjectFaculties = await prisma.subjectFaculty.findMany()
    * ```
    */
  get subjectFaculty(): Prisma.SubjectFacultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marks`: Exposes CRUD operations for the **Marks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.marks.findMany()
    * ```
    */
  get marks(): Prisma.MarksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detain`: Exposes CRUD operations for the **Detain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detains
    * const detains = await prisma.detain.findMany()
    * ```
    */
  get detain(): Prisma.DetainDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Year: 'Year',
    User: 'User',
    Subject: 'Subject',
    SubjectFaculty: 'SubjectFaculty',
    Student: 'Student',
    Exam: 'Exam',
    Marks: 'Marks',
    Detain: 'Detain'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "year" | "user" | "subject" | "subjectFaculty" | "student" | "exam" | "marks" | "detain"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Year: {
        payload: Prisma.$YearPayload<ExtArgs>
        fields: Prisma.YearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findFirst: {
            args: Prisma.YearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findMany: {
            args: Prisma.YearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          create: {
            args: Prisma.YearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          createMany: {
            args: Prisma.YearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          delete: {
            args: Prisma.YearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          update: {
            args: Prisma.YearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          deleteMany: {
            args: Prisma.YearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YearUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          upsert: {
            args: Prisma.YearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          aggregate: {
            args: Prisma.YearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYear>
          }
          groupBy: {
            args: Prisma.YearGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearGroupByOutputType>[]
          }
          count: {
            args: Prisma.YearCountArgs<ExtArgs>
            result: $Utils.Optional<YearCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      SubjectFaculty: {
        payload: Prisma.$SubjectFacultyPayload<ExtArgs>
        fields: Prisma.SubjectFacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          findFirst: {
            args: Prisma.SubjectFacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          findMany: {
            args: Prisma.SubjectFacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>[]
          }
          create: {
            args: Prisma.SubjectFacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          createMany: {
            args: Prisma.SubjectFacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectFacultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>[]
          }
          delete: {
            args: Prisma.SubjectFacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          update: {
            args: Prisma.SubjectFacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          deleteMany: {
            args: Prisma.SubjectFacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectFacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectFacultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>[]
          }
          upsert: {
            args: Prisma.SubjectFacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectFacultyPayload>
          }
          aggregate: {
            args: Prisma.SubjectFacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectFaculty>
          }
          groupBy: {
            args: Prisma.SubjectFacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectFacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectFacultyCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectFacultyCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Marks: {
        payload: Prisma.$MarksPayload<ExtArgs>
        fields: Prisma.MarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findFirst: {
            args: Prisma.MarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findMany: {
            args: Prisma.MarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          create: {
            args: Prisma.MarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          createMany: {
            args: Prisma.MarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          delete: {
            args: Prisma.MarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          update: {
            args: Prisma.MarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          deleteMany: {
            args: Prisma.MarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          upsert: {
            args: Prisma.MarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          aggregate: {
            args: Prisma.MarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarks>
          }
          groupBy: {
            args: Prisma.MarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarksCountArgs<ExtArgs>
            result: $Utils.Optional<MarksCountAggregateOutputType> | number
          }
        }
      }
      Detain: {
        payload: Prisma.$DetainPayload<ExtArgs>
        fields: Prisma.DetainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          findFirst: {
            args: Prisma.DetainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          findMany: {
            args: Prisma.DetainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>[]
          }
          create: {
            args: Prisma.DetainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          createMany: {
            args: Prisma.DetainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>[]
          }
          delete: {
            args: Prisma.DetainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          update: {
            args: Prisma.DetainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          deleteMany: {
            args: Prisma.DetainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>[]
          }
          upsert: {
            args: Prisma.DetainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetainPayload>
          }
          aggregate: {
            args: Prisma.DetainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetain>
          }
          groupBy: {
            args: Prisma.DetainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetainCountArgs<ExtArgs>
            result: $Utils.Optional<DetainCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    year?: YearOmit
    user?: UserOmit
    subject?: SubjectOmit
    subjectFaculty?: SubjectFacultyOmit
    student?: StudentOmit
    exam?: ExamOmit
    marks?: MarksOmit
    detain?: DetainOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type YearCountOutputType
   */

  export type YearCountOutputType = {
    subject: number
    subjectFaculty: number
    exam: number
    marks: number
    detain: number
  }

  export type YearCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | YearCountOutputTypeCountSubjectArgs
    subjectFaculty?: boolean | YearCountOutputTypeCountSubjectFacultyArgs
    exam?: boolean | YearCountOutputTypeCountExamArgs
    marks?: boolean | YearCountOutputTypeCountMarksArgs
    detain?: boolean | YearCountOutputTypeCountDetainArgs
  }

  // Custom InputTypes
  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearCountOutputType
     */
    select?: YearCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountSubjectFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectFacultyWhereInput
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountDetainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetainWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subjectCoordinator: number
    subjectFaculty: number
    exam: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectCoordinator?: boolean | UserCountOutputTypeCountSubjectCoordinatorArgs
    subjectFaculty?: boolean | UserCountOutputTypeCountSubjectFacultyArgs
    exam?: boolean | UserCountOutputTypeCountExamArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectCoordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectFacultyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    students: number
    faculties: number
    exam: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SubjectCountOutputTypeCountStudentsArgs
    faculties?: boolean | SubjectCountOutputTypeCountFacultiesArgs
    exam?: boolean | SubjectCountOutputTypeCountExamArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountFacultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectFacultyWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    subjects: number
    exams: number
    marks: number
    detain: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | StudentCountOutputTypeCountSubjectsArgs
    exams?: boolean | StudentCountOutputTypeCountExamsArgs
    marks?: boolean | StudentCountOutputTypeCountMarksArgs
    detain?: boolean | StudentCountOutputTypeCountDetainArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDetainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetainWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    eligibleStudents: number
    detain: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleStudents?: boolean | ExamCountOutputTypeCountEligibleStudentsArgs
    detain?: boolean | ExamCountOutputTypeCountDetainArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountEligibleStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountDetainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetainWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Year
   */

  export type AggregateYear = {
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  export type YearAvgAggregateOutputType = {
    id: number | null
  }

  export type YearSumAggregateOutputType = {
    id: number | null
  }

  export type YearMinAggregateOutputType = {
    id: number | null
    year: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type YearMaxAggregateOutputType = {
    id: number | null
    year: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type YearCountAggregateOutputType = {
    id: number
    year: number
    startDate: number
    endDate: number
    _all: number
  }


  export type YearAvgAggregateInputType = {
    id?: true
  }

  export type YearSumAggregateInputType = {
    id?: true
  }

  export type YearMinAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
  }

  export type YearMaxAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
  }

  export type YearCountAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type YearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Year to aggregate.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Years
    **/
    _count?: true | YearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearMaxAggregateInputType
  }

  export type GetYearAggregateType<T extends YearAggregateArgs> = {
        [P in keyof T & keyof AggregateYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYear[P]>
      : GetScalarType<T[P], AggregateYear[P]>
  }




  export type YearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearWhereInput
    orderBy?: YearOrderByWithAggregationInput | YearOrderByWithAggregationInput[]
    by: YearScalarFieldEnum[] | YearScalarFieldEnum
    having?: YearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearCountAggregateInputType | true
    _avg?: YearAvgAggregateInputType
    _sum?: YearSumAggregateInputType
    _min?: YearMinAggregateInputType
    _max?: YearMaxAggregateInputType
  }

  export type YearGroupByOutputType = {
    id: number
    year: string
    startDate: Date
    endDate: Date
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  type GetYearGroupByPayload<T extends YearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearGroupByOutputType[P]>
            : GetScalarType<T[P], YearGroupByOutputType[P]>
        }
      >
    >


  export type YearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    subject?: boolean | Year$subjectArgs<ExtArgs>
    subjectFaculty?: boolean | Year$subjectFacultyArgs<ExtArgs>
    exam?: boolean | Year$examArgs<ExtArgs>
    marks?: boolean | Year$marksArgs<ExtArgs>
    detain?: boolean | Year$detainArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["year"]>

  export type YearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectScalar = {
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type YearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "startDate" | "endDate", ExtArgs["result"]["year"]>
  export type YearInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | Year$subjectArgs<ExtArgs>
    subjectFaculty?: boolean | Year$subjectFacultyArgs<ExtArgs>
    exam?: boolean | Year$examArgs<ExtArgs>
    marks?: boolean | Year$marksArgs<ExtArgs>
    detain?: boolean | Year$detainArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type YearIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type YearIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $YearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Year"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>[]
      subjectFaculty: Prisma.$SubjectFacultyPayload<ExtArgs>[]
      exam: Prisma.$ExamPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs>[]
      detain: Prisma.$DetainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["year"]>
    composites: {}
  }

  type YearGetPayload<S extends boolean | null | undefined | YearDefaultArgs> = $Result.GetResult<Prisma.$YearPayload, S>

  type YearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearCountAggregateInputType | true
    }

  export interface YearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Year'], meta: { name: 'Year' } }
    /**
     * Find zero or one Year that matches the filter.
     * @param {YearFindUniqueArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearFindUniqueArgs>(args: SelectSubset<T, YearFindUniqueArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Year that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearFindUniqueOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearFindUniqueOrThrowArgs>(args: SelectSubset<T, YearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearFindFirstArgs>(args?: SelectSubset<T, YearFindFirstArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearFindFirstOrThrowArgs>(args?: SelectSubset<T, YearFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Years
     * const years = await prisma.year.findMany()
     * 
     * // Get first 10 Years
     * const years = await prisma.year.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearWithIdOnly = await prisma.year.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearFindManyArgs>(args?: SelectSubset<T, YearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Year.
     * @param {YearCreateArgs} args - Arguments to create a Year.
     * @example
     * // Create one Year
     * const Year = await prisma.year.create({
     *   data: {
     *     // ... data to create a Year
     *   }
     * })
     * 
     */
    create<T extends YearCreateArgs>(args: SelectSubset<T, YearCreateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Years.
     * @param {YearCreateManyArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearCreateManyArgs>(args?: SelectSubset<T, YearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Years and returns the data saved in the database.
     * @param {YearCreateManyAndReturnArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YearCreateManyAndReturnArgs>(args?: SelectSubset<T, YearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Year.
     * @param {YearDeleteArgs} args - Arguments to delete one Year.
     * @example
     * // Delete one Year
     * const Year = await prisma.year.delete({
     *   where: {
     *     // ... filter to delete one Year
     *   }
     * })
     * 
     */
    delete<T extends YearDeleteArgs>(args: SelectSubset<T, YearDeleteArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Year.
     * @param {YearUpdateArgs} args - Arguments to update one Year.
     * @example
     * // Update one Year
     * const year = await prisma.year.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearUpdateArgs>(args: SelectSubset<T, YearUpdateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Years.
     * @param {YearDeleteManyArgs} args - Arguments to filter Years to delete.
     * @example
     * // Delete a few Years
     * const { count } = await prisma.year.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearDeleteManyArgs>(args?: SelectSubset<T, YearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearUpdateManyArgs>(args: SelectSubset<T, YearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years and returns the data updated in the database.
     * @param {YearUpdateManyAndReturnArgs} args - Arguments to update many Years.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YearUpdateManyAndReturnArgs>(args: SelectSubset<T, YearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Year.
     * @param {YearUpsertArgs} args - Arguments to update or create a Year.
     * @example
     * // Update or create a Year
     * const year = await prisma.year.upsert({
     *   create: {
     *     // ... data to create a Year
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Year we want to update
     *   }
     * })
     */
    upsert<T extends YearUpsertArgs>(args: SelectSubset<T, YearUpsertArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearCountArgs} args - Arguments to filter Years to count.
     * @example
     * // Count the number of Years
     * const count = await prisma.year.count({
     *   where: {
     *     // ... the filter for the Years we want to count
     *   }
     * })
    **/
    count<T extends YearCountArgs>(
      args?: Subset<T, YearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearAggregateArgs>(args: Subset<T, YearAggregateArgs>): Prisma.PrismaPromise<GetYearAggregateType<T>>

    /**
     * Group by Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearGroupByArgs} args - Group by arguments.
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
      T extends YearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearGroupByArgs['orderBy'] }
        : { orderBy?: YearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, YearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Year model
   */
  readonly fields: YearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Year.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends Year$subjectArgs<ExtArgs> = {}>(args?: Subset<T, Year$subjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjectFaculty<T extends Year$subjectFacultyArgs<ExtArgs> = {}>(args?: Subset<T, Year$subjectFacultyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam<T extends Year$examArgs<ExtArgs> = {}>(args?: Subset<T, Year$examArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends Year$marksArgs<ExtArgs> = {}>(args?: Subset<T, Year$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detain<T extends Year$detainArgs<ExtArgs> = {}>(args?: Subset<T, Year$detainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Year model
   */
  interface YearFieldRefs {
    readonly id: FieldRef<"Year", 'Int'>
    readonly year: FieldRef<"Year", 'String'>
    readonly startDate: FieldRef<"Year", 'DateTime'>
    readonly endDate: FieldRef<"Year", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Year findUnique
   */
  export type YearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findUniqueOrThrow
   */
  export type YearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findFirst
   */
  export type YearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findFirstOrThrow
   */
  export type YearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findMany
   */
  export type YearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Years to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year create
   */
  export type YearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to create a Year.
     */
    data: XOR<YearCreateInput, YearUncheckedCreateInput>
  }

  /**
   * Year createMany
   */
  export type YearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year createManyAndReturn
   */
  export type YearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year update
   */
  export type YearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to update a Year.
     */
    data: XOR<YearUpdateInput, YearUncheckedUpdateInput>
    /**
     * Choose, which Year to update.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year updateMany
   */
  export type YearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year updateManyAndReturn
   */
  export type YearUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year upsert
   */
  export type YearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The filter to search for the Year to update in case it exists.
     */
    where: YearWhereUniqueInput
    /**
     * In case the Year found by the `where` argument doesn't exist, create a new Year with this data.
     */
    create: XOR<YearCreateInput, YearUncheckedCreateInput>
    /**
     * In case the Year was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearUpdateInput, YearUncheckedUpdateInput>
  }

  /**
   * Year delete
   */
  export type YearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter which Year to delete.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year deleteMany
   */
  export type YearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Years to delete
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to delete.
     */
    limit?: number
  }

  /**
   * Year.subject
   */
  export type Year$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Year.subjectFaculty
   */
  export type Year$subjectFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    where?: SubjectFacultyWhereInput
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    cursor?: SubjectFacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * Year.exam
   */
  export type Year$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Year.marks
   */
  export type Year$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Year.detain
   */
  export type Year$detainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    where?: DetainWhereInput
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    cursor?: DetainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Year without action
   */
  export type YearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
  }


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
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    department: $Enums.Department | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    department: $Enums.Department | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    password: number
    department: number
    role: number
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
    userId?: true
    name?: true
    email?: true
    password?: true
    department?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    department?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    department?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
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
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    role?: boolean
    subjectCoordinator?: boolean | User$subjectCoordinatorArgs<ExtArgs>
    subjectFaculty?: boolean | User$subjectFacultyArgs<ExtArgs>
    exam?: boolean | User$examArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "password" | "department" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectCoordinator?: boolean | User$subjectCoordinatorArgs<ExtArgs>
    subjectFaculty?: boolean | User$subjectFacultyArgs<ExtArgs>
    exam?: boolean | User$examArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subjectCoordinator: Prisma.$SubjectPayload<ExtArgs>[]
      subjectFaculty: Prisma.$SubjectFacultyPayload<ExtArgs>[]
      exam: Prisma.$ExamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      email: string
      password: string
      department: $Enums.Department
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjectCoordinator<T extends User$subjectCoordinatorArgs<ExtArgs> = {}>(args?: Subset<T, User$subjectCoordinatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjectFaculty<T extends User$subjectFacultyArgs<ExtArgs> = {}>(args?: Subset<T, User$subjectFacultyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam<T extends User$examArgs<ExtArgs> = {}>(args?: Subset<T, User$examArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'Department'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subjectCoordinator
   */
  export type User$subjectCoordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User.subjectFaculty
   */
  export type User$subjectFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    where?: SubjectFacultyWhereInput
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    cursor?: SubjectFacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * User.exam
   */
  export type User$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    semester: number | null
    coordinatorId: number | null
    theory_hour: number | null
    practical_hour: number | null
    theory_credite: number | null
    practical_credite: number | null
    theory_int_marks: number | null
    practical_int_marks: number | null
    theory_ext_marks: number | null
    practical_ext_marks: number | null
    yearId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    semester: number | null
    coordinatorId: number | null
    theory_hour: number | null
    practical_hour: number | null
    theory_credite: number | null
    practical_credite: number | null
    theory_int_marks: number | null
    practical_int_marks: number | null
    theory_ext_marks: number | null
    practical_ext_marks: number | null
    yearId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    semester: number | null
    coordinatorId: number | null
    type: $Enums.SubjectType | null
    dep_IT: boolean | null
    dep_CE: boolean | null
    dep_CSE: boolean | null
    theory_hour: number | null
    practical_hour: number | null
    theory_credite: number | null
    practical_credite: number | null
    theory_int_marks: number | null
    practical_int_marks: number | null
    theory_ext_marks: number | null
    practical_ext_marks: number | null
    yearId: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    semester: number | null
    coordinatorId: number | null
    type: $Enums.SubjectType | null
    dep_IT: boolean | null
    dep_CE: boolean | null
    dep_CSE: boolean | null
    theory_hour: number | null
    practical_hour: number | null
    theory_credite: number | null
    practical_credite: number | null
    theory_int_marks: number | null
    practical_int_marks: number | null
    theory_ext_marks: number | null
    practical_ext_marks: number | null
    yearId: number | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    semester: number
    coordinatorId: number
    type: number
    dep_IT: number
    dep_CE: number
    dep_CSE: number
    theory_hour: number
    practical_hour: number
    theory_credite: number
    practical_credite: number
    theory_int_marks: number
    practical_int_marks: number
    theory_ext_marks: number
    practical_ext_marks: number
    yearId: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    semester?: true
    coordinatorId?: true
    theory_hour?: true
    practical_hour?: true
    theory_credite?: true
    practical_credite?: true
    theory_int_marks?: true
    practical_int_marks?: true
    theory_ext_marks?: true
    practical_ext_marks?: true
    yearId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    semester?: true
    coordinatorId?: true
    theory_hour?: true
    practical_hour?: true
    theory_credite?: true
    practical_credite?: true
    theory_int_marks?: true
    practical_int_marks?: true
    theory_ext_marks?: true
    practical_ext_marks?: true
    yearId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    coordinatorId?: true
    type?: true
    dep_IT?: true
    dep_CE?: true
    dep_CSE?: true
    theory_hour?: true
    practical_hour?: true
    theory_credite?: true
    practical_credite?: true
    theory_int_marks?: true
    practical_int_marks?: true
    theory_ext_marks?: true
    practical_ext_marks?: true
    yearId?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    coordinatorId?: true
    type?: true
    dep_IT?: true
    dep_CE?: true
    dep_CSE?: true
    theory_hour?: true
    practical_hour?: true
    theory_credite?: true
    practical_credite?: true
    theory_int_marks?: true
    practical_int_marks?: true
    theory_ext_marks?: true
    practical_ext_marks?: true
    yearId?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    coordinatorId?: true
    type?: true
    dep_IT?: true
    dep_CE?: true
    dep_CSE?: true
    theory_hour?: true
    practical_hour?: true
    theory_credite?: true
    practical_credite?: true
    theory_int_marks?: true
    practical_int_marks?: true
    theory_ext_marks?: true
    practical_ext_marks?: true
    yearId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT: boolean | null
    dep_CE: boolean | null
    dep_CSE: boolean | null
    theory_hour: number | null
    practical_hour: number | null
    theory_credite: number | null
    practical_credite: number | null
    theory_int_marks: number | null
    practical_int_marks: number | null
    theory_ext_marks: number | null
    practical_ext_marks: number | null
    yearId: number
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    coordinatorId?: boolean
    type?: boolean
    dep_IT?: boolean
    dep_CE?: boolean
    dep_CSE?: boolean
    theory_hour?: boolean
    practical_hour?: boolean
    theory_credite?: boolean
    practical_credite?: boolean
    theory_int_marks?: boolean
    practical_int_marks?: boolean
    theory_ext_marks?: boolean
    practical_ext_marks?: boolean
    yearId?: boolean
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    faculties?: boolean | Subject$facultiesArgs<ExtArgs>
    exam?: boolean | Subject$examArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    coordinatorId?: boolean
    type?: boolean
    dep_IT?: boolean
    dep_CE?: boolean
    dep_CSE?: boolean
    theory_hour?: boolean
    practical_hour?: boolean
    theory_credite?: boolean
    practical_credite?: boolean
    theory_int_marks?: boolean
    practical_int_marks?: boolean
    theory_ext_marks?: boolean
    practical_ext_marks?: boolean
    yearId?: boolean
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    coordinatorId?: boolean
    type?: boolean
    dep_IT?: boolean
    dep_CE?: boolean
    dep_CSE?: boolean
    theory_hour?: boolean
    practical_hour?: boolean
    theory_credite?: boolean
    practical_credite?: boolean
    theory_int_marks?: boolean
    practical_int_marks?: boolean
    theory_ext_marks?: boolean
    practical_ext_marks?: boolean
    yearId?: boolean
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    coordinatorId?: boolean
    type?: boolean
    dep_IT?: boolean
    dep_CE?: boolean
    dep_CSE?: boolean
    theory_hour?: boolean
    practical_hour?: boolean
    theory_credite?: boolean
    practical_credite?: boolean
    theory_int_marks?: boolean
    practical_int_marks?: boolean
    theory_ext_marks?: boolean
    practical_ext_marks?: boolean
    yearId?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "semester" | "coordinatorId" | "type" | "dep_IT" | "dep_CE" | "dep_CSE" | "theory_hour" | "practical_hour" | "theory_credite" | "practical_credite" | "theory_int_marks" | "practical_int_marks" | "theory_ext_marks" | "practical_ext_marks" | "yearId", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    faculties?: boolean | Subject$facultiesArgs<ExtArgs>
    exam?: boolean | Subject$examArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectCoordinator?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      subjectCoordinator: Prisma.$UserPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
      faculties: Prisma.$SubjectFacultyPayload<ExtArgs>[]
      exam: Prisma.$ExamPayload<ExtArgs>[]
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      semester: number
      coordinatorId: number
      type: $Enums.SubjectType
      dep_IT: boolean | null
      dep_CE: boolean | null
      dep_CSE: boolean | null
      theory_hour: number | null
      practical_hour: number | null
      theory_credite: number | null
      practical_credite: number | null
      theory_int_marks: number | null
      practical_int_marks: number | null
      theory_ext_marks: number | null
      practical_ext_marks: number | null
      yearId: number
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjectCoordinator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Subject$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faculties<T extends Subject$facultiesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$facultiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam<T extends Subject$examArgs<ExtArgs> = {}>(args?: Subset<T, Subject$examArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly code: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly semester: FieldRef<"Subject", 'Int'>
    readonly coordinatorId: FieldRef<"Subject", 'Int'>
    readonly type: FieldRef<"Subject", 'SubjectType'>
    readonly dep_IT: FieldRef<"Subject", 'Boolean'>
    readonly dep_CE: FieldRef<"Subject", 'Boolean'>
    readonly dep_CSE: FieldRef<"Subject", 'Boolean'>
    readonly theory_hour: FieldRef<"Subject", 'Int'>
    readonly practical_hour: FieldRef<"Subject", 'Int'>
    readonly theory_credite: FieldRef<"Subject", 'Int'>
    readonly practical_credite: FieldRef<"Subject", 'Int'>
    readonly theory_int_marks: FieldRef<"Subject", 'Int'>
    readonly practical_int_marks: FieldRef<"Subject", 'Int'>
    readonly theory_ext_marks: FieldRef<"Subject", 'Int'>
    readonly practical_ext_marks: FieldRef<"Subject", 'Int'>
    readonly yearId: FieldRef<"Subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.students
   */
  export type Subject$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Subject.faculties
   */
  export type Subject$facultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    where?: SubjectFacultyWhereInput
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    cursor?: SubjectFacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * Subject.exam
   */
  export type Subject$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model SubjectFaculty
   */

  export type AggregateSubjectFaculty = {
    _count: SubjectFacultyCountAggregateOutputType | null
    _avg: SubjectFacultyAvgAggregateOutputType | null
    _sum: SubjectFacultySumAggregateOutputType | null
    _min: SubjectFacultyMinAggregateOutputType | null
    _max: SubjectFacultyMaxAggregateOutputType | null
  }

  export type SubjectFacultyAvgAggregateOutputType = {
    facultyId: number | null
    subjectId: number | null
    yearId: number | null
  }

  export type SubjectFacultySumAggregateOutputType = {
    facultyId: number | null
    subjectId: number | null
    yearId: number | null
  }

  export type SubjectFacultyMinAggregateOutputType = {
    id: string | null
    facultyId: number | null
    subjectId: number | null
    role: $Enums.SubjectFacultyRole | null
    yearId: number | null
  }

  export type SubjectFacultyMaxAggregateOutputType = {
    id: string | null
    facultyId: number | null
    subjectId: number | null
    role: $Enums.SubjectFacultyRole | null
    yearId: number | null
  }

  export type SubjectFacultyCountAggregateOutputType = {
    id: number
    facultyId: number
    subjectId: number
    role: number
    yearId: number
    _all: number
  }


  export type SubjectFacultyAvgAggregateInputType = {
    facultyId?: true
    subjectId?: true
    yearId?: true
  }

  export type SubjectFacultySumAggregateInputType = {
    facultyId?: true
    subjectId?: true
    yearId?: true
  }

  export type SubjectFacultyMinAggregateInputType = {
    id?: true
    facultyId?: true
    subjectId?: true
    role?: true
    yearId?: true
  }

  export type SubjectFacultyMaxAggregateInputType = {
    id?: true
    facultyId?: true
    subjectId?: true
    role?: true
    yearId?: true
  }

  export type SubjectFacultyCountAggregateInputType = {
    id?: true
    facultyId?: true
    subjectId?: true
    role?: true
    yearId?: true
    _all?: true
  }

  export type SubjectFacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectFaculty to aggregate.
     */
    where?: SubjectFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectFaculties to fetch.
     */
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectFaculties
    **/
    _count?: true | SubjectFacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectFacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectFacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectFacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectFacultyMaxAggregateInputType
  }

  export type GetSubjectFacultyAggregateType<T extends SubjectFacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectFaculty[P]>
      : GetScalarType<T[P], AggregateSubjectFaculty[P]>
  }




  export type SubjectFacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectFacultyWhereInput
    orderBy?: SubjectFacultyOrderByWithAggregationInput | SubjectFacultyOrderByWithAggregationInput[]
    by: SubjectFacultyScalarFieldEnum[] | SubjectFacultyScalarFieldEnum
    having?: SubjectFacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectFacultyCountAggregateInputType | true
    _avg?: SubjectFacultyAvgAggregateInputType
    _sum?: SubjectFacultySumAggregateInputType
    _min?: SubjectFacultyMinAggregateInputType
    _max?: SubjectFacultyMaxAggregateInputType
  }

  export type SubjectFacultyGroupByOutputType = {
    id: string
    facultyId: number
    subjectId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
    _count: SubjectFacultyCountAggregateOutputType | null
    _avg: SubjectFacultyAvgAggregateOutputType | null
    _sum: SubjectFacultySumAggregateOutputType | null
    _min: SubjectFacultyMinAggregateOutputType | null
    _max: SubjectFacultyMaxAggregateOutputType | null
  }

  type GetSubjectFacultyGroupByPayload<T extends SubjectFacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectFacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectFacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectFacultyGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectFacultyGroupByOutputType[P]>
        }
      >
    >


  export type SubjectFacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultyId?: boolean
    subjectId?: boolean
    role?: boolean
    yearId?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectFaculty"]>

  export type SubjectFacultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultyId?: boolean
    subjectId?: boolean
    role?: boolean
    yearId?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectFaculty"]>

  export type SubjectFacultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultyId?: boolean
    subjectId?: boolean
    role?: boolean
    yearId?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectFaculty"]>

  export type SubjectFacultySelectScalar = {
    id?: boolean
    facultyId?: boolean
    subjectId?: boolean
    role?: boolean
    yearId?: boolean
  }

  export type SubjectFacultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facultyId" | "subjectId" | "role" | "yearId", ExtArgs["result"]["subjectFaculty"]>
  export type SubjectFacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type SubjectFacultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type SubjectFacultyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }

  export type $SubjectFacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectFaculty"
    objects: {
      faculty: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facultyId: number
      subjectId: number
      role: $Enums.SubjectFacultyRole
      yearId: number
    }, ExtArgs["result"]["subjectFaculty"]>
    composites: {}
  }

  type SubjectFacultyGetPayload<S extends boolean | null | undefined | SubjectFacultyDefaultArgs> = $Result.GetResult<Prisma.$SubjectFacultyPayload, S>

  type SubjectFacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectFacultyCountAggregateInputType | true
    }

  export interface SubjectFacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectFaculty'], meta: { name: 'SubjectFaculty' } }
    /**
     * Find zero or one SubjectFaculty that matches the filter.
     * @param {SubjectFacultyFindUniqueArgs} args - Arguments to find a SubjectFaculty
     * @example
     * // Get one SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFacultyFindUniqueArgs>(args: SelectSubset<T, SubjectFacultyFindUniqueArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectFaculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFacultyFindUniqueOrThrowArgs} args - Arguments to find a SubjectFaculty
     * @example
     * // Get one SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectFaculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyFindFirstArgs} args - Arguments to find a SubjectFaculty
     * @example
     * // Get one SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFacultyFindFirstArgs>(args?: SelectSubset<T, SubjectFacultyFindFirstArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectFaculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyFindFirstOrThrowArgs} args - Arguments to find a SubjectFaculty
     * @example
     * // Get one SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectFaculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectFaculties
     * const subjectFaculties = await prisma.subjectFaculty.findMany()
     * 
     * // Get first 10 SubjectFaculties
     * const subjectFaculties = await prisma.subjectFaculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectFacultyWithIdOnly = await prisma.subjectFaculty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFacultyFindManyArgs>(args?: SelectSubset<T, SubjectFacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectFaculty.
     * @param {SubjectFacultyCreateArgs} args - Arguments to create a SubjectFaculty.
     * @example
     * // Create one SubjectFaculty
     * const SubjectFaculty = await prisma.subjectFaculty.create({
     *   data: {
     *     // ... data to create a SubjectFaculty
     *   }
     * })
     * 
     */
    create<T extends SubjectFacultyCreateArgs>(args: SelectSubset<T, SubjectFacultyCreateArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectFaculties.
     * @param {SubjectFacultyCreateManyArgs} args - Arguments to create many SubjectFaculties.
     * @example
     * // Create many SubjectFaculties
     * const subjectFaculty = await prisma.subjectFaculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectFacultyCreateManyArgs>(args?: SelectSubset<T, SubjectFacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectFaculties and returns the data saved in the database.
     * @param {SubjectFacultyCreateManyAndReturnArgs} args - Arguments to create many SubjectFaculties.
     * @example
     * // Create many SubjectFaculties
     * const subjectFaculty = await prisma.subjectFaculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectFaculties and only return the `id`
     * const subjectFacultyWithIdOnly = await prisma.subjectFaculty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectFacultyCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectFacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectFaculty.
     * @param {SubjectFacultyDeleteArgs} args - Arguments to delete one SubjectFaculty.
     * @example
     * // Delete one SubjectFaculty
     * const SubjectFaculty = await prisma.subjectFaculty.delete({
     *   where: {
     *     // ... filter to delete one SubjectFaculty
     *   }
     * })
     * 
     */
    delete<T extends SubjectFacultyDeleteArgs>(args: SelectSubset<T, SubjectFacultyDeleteArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectFaculty.
     * @param {SubjectFacultyUpdateArgs} args - Arguments to update one SubjectFaculty.
     * @example
     * // Update one SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectFacultyUpdateArgs>(args: SelectSubset<T, SubjectFacultyUpdateArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectFaculties.
     * @param {SubjectFacultyDeleteManyArgs} args - Arguments to filter SubjectFaculties to delete.
     * @example
     * // Delete a few SubjectFaculties
     * const { count } = await prisma.subjectFaculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectFacultyDeleteManyArgs>(args?: SelectSubset<T, SubjectFacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectFaculties
     * const subjectFaculty = await prisma.subjectFaculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectFacultyUpdateManyArgs>(args: SelectSubset<T, SubjectFacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectFaculties and returns the data updated in the database.
     * @param {SubjectFacultyUpdateManyAndReturnArgs} args - Arguments to update many SubjectFaculties.
     * @example
     * // Update many SubjectFaculties
     * const subjectFaculty = await prisma.subjectFaculty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectFaculties and only return the `id`
     * const subjectFacultyWithIdOnly = await prisma.subjectFaculty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectFacultyUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectFacultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectFaculty.
     * @param {SubjectFacultyUpsertArgs} args - Arguments to update or create a SubjectFaculty.
     * @example
     * // Update or create a SubjectFaculty
     * const subjectFaculty = await prisma.subjectFaculty.upsert({
     *   create: {
     *     // ... data to create a SubjectFaculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectFaculty we want to update
     *   }
     * })
     */
    upsert<T extends SubjectFacultyUpsertArgs>(args: SelectSubset<T, SubjectFacultyUpsertArgs<ExtArgs>>): Prisma__SubjectFacultyClient<$Result.GetResult<Prisma.$SubjectFacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyCountArgs} args - Arguments to filter SubjectFaculties to count.
     * @example
     * // Count the number of SubjectFaculties
     * const count = await prisma.subjectFaculty.count({
     *   where: {
     *     // ... the filter for the SubjectFaculties we want to count
     *   }
     * })
    **/
    count<T extends SubjectFacultyCountArgs>(
      args?: Subset<T, SubjectFacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectFacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectFacultyAggregateArgs>(args: Subset<T, SubjectFacultyAggregateArgs>): Prisma.PrismaPromise<GetSubjectFacultyAggregateType<T>>

    /**
     * Group by SubjectFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFacultyGroupByArgs} args - Group by arguments.
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
      T extends SubjectFacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectFacultyGroupByArgs['orderBy'] }
        : { orderBy?: SubjectFacultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubjectFacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectFaculty model
   */
  readonly fields: SubjectFacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectFaculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectFacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubjectFaculty model
   */
  interface SubjectFacultyFieldRefs {
    readonly id: FieldRef<"SubjectFaculty", 'String'>
    readonly facultyId: FieldRef<"SubjectFaculty", 'Int'>
    readonly subjectId: FieldRef<"SubjectFaculty", 'Int'>
    readonly role: FieldRef<"SubjectFaculty", 'SubjectFacultyRole'>
    readonly yearId: FieldRef<"SubjectFaculty", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubjectFaculty findUnique
   */
  export type SubjectFacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter, which SubjectFaculty to fetch.
     */
    where: SubjectFacultyWhereUniqueInput
  }

  /**
   * SubjectFaculty findUniqueOrThrow
   */
  export type SubjectFacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter, which SubjectFaculty to fetch.
     */
    where: SubjectFacultyWhereUniqueInput
  }

  /**
   * SubjectFaculty findFirst
   */
  export type SubjectFacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter, which SubjectFaculty to fetch.
     */
    where?: SubjectFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectFaculties to fetch.
     */
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectFaculties.
     */
    cursor?: SubjectFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectFaculties.
     */
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * SubjectFaculty findFirstOrThrow
   */
  export type SubjectFacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter, which SubjectFaculty to fetch.
     */
    where?: SubjectFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectFaculties to fetch.
     */
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectFaculties.
     */
    cursor?: SubjectFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectFaculties.
     */
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * SubjectFaculty findMany
   */
  export type SubjectFacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter, which SubjectFaculties to fetch.
     */
    where?: SubjectFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectFaculties to fetch.
     */
    orderBy?: SubjectFacultyOrderByWithRelationInput | SubjectFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectFaculties.
     */
    cursor?: SubjectFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectFaculties.
     */
    skip?: number
    distinct?: SubjectFacultyScalarFieldEnum | SubjectFacultyScalarFieldEnum[]
  }

  /**
   * SubjectFaculty create
   */
  export type SubjectFacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectFaculty.
     */
    data: XOR<SubjectFacultyCreateInput, SubjectFacultyUncheckedCreateInput>
  }

  /**
   * SubjectFaculty createMany
   */
  export type SubjectFacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectFaculties.
     */
    data: SubjectFacultyCreateManyInput | SubjectFacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectFaculty createManyAndReturn
   */
  export type SubjectFacultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectFaculties.
     */
    data: SubjectFacultyCreateManyInput | SubjectFacultyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectFaculty update
   */
  export type SubjectFacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectFaculty.
     */
    data: XOR<SubjectFacultyUpdateInput, SubjectFacultyUncheckedUpdateInput>
    /**
     * Choose, which SubjectFaculty to update.
     */
    where: SubjectFacultyWhereUniqueInput
  }

  /**
   * SubjectFaculty updateMany
   */
  export type SubjectFacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectFaculties.
     */
    data: XOR<SubjectFacultyUpdateManyMutationInput, SubjectFacultyUncheckedUpdateManyInput>
    /**
     * Filter which SubjectFaculties to update
     */
    where?: SubjectFacultyWhereInput
    /**
     * Limit how many SubjectFaculties to update.
     */
    limit?: number
  }

  /**
   * SubjectFaculty updateManyAndReturn
   */
  export type SubjectFacultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * The data used to update SubjectFaculties.
     */
    data: XOR<SubjectFacultyUpdateManyMutationInput, SubjectFacultyUncheckedUpdateManyInput>
    /**
     * Filter which SubjectFaculties to update
     */
    where?: SubjectFacultyWhereInput
    /**
     * Limit how many SubjectFaculties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectFaculty upsert
   */
  export type SubjectFacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectFaculty to update in case it exists.
     */
    where: SubjectFacultyWhereUniqueInput
    /**
     * In case the SubjectFaculty found by the `where` argument doesn't exist, create a new SubjectFaculty with this data.
     */
    create: XOR<SubjectFacultyCreateInput, SubjectFacultyUncheckedCreateInput>
    /**
     * In case the SubjectFaculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectFacultyUpdateInput, SubjectFacultyUncheckedUpdateInput>
  }

  /**
   * SubjectFaculty delete
   */
  export type SubjectFacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
    /**
     * Filter which SubjectFaculty to delete.
     */
    where: SubjectFacultyWhereUniqueInput
  }

  /**
   * SubjectFaculty deleteMany
   */
  export type SubjectFacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectFaculties to delete
     */
    where?: SubjectFacultyWhereInput
    /**
     * Limit how many SubjectFaculties to delete.
     */
    limit?: number
  }

  /**
   * SubjectFaculty without action
   */
  export type SubjectFacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectFaculty
     */
    select?: SubjectFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectFaculty
     */
    omit?: SubjectFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectFacultyInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studentId: number | null
    semester: number | null
  }

  export type StudentSumAggregateOutputType = {
    studentId: number | null
    semester: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    studentId: number | null
    name: string | null
    email: string | null
    department: $Enums.Department | null
    semester: number | null
    class: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    studentId: number | null
    name: string | null
    email: string | null
    department: $Enums.Department | null
    semester: number | null
    class: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentId: number
    name: number
    email: number
    department: number
    semester: number
    class: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studentId?: true
    semester?: true
  }

  export type StudentSumAggregateInputType = {
    studentId?: true
    semester?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    studentId?: true
    name?: true
    email?: true
    department?: true
    semester?: true
    class?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentId?: true
    name?: true
    email?: true
    department?: true
    semester?: true
    class?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentId?: true
    name?: true
    email?: true
    department?: true
    semester?: true
    class?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    name?: boolean
    email?: boolean
    department?: boolean
    semester?: boolean
    class?: boolean
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    exams?: boolean | Student$examsArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    detain?: boolean | Student$detainArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    name?: boolean
    email?: boolean
    department?: boolean
    semester?: boolean
    class?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    name?: boolean
    email?: boolean
    department?: boolean
    semester?: boolean
    class?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    studentId?: boolean
    name?: boolean
    email?: boolean
    department?: boolean
    semester?: boolean
    class?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "name" | "email" | "department" | "semester" | "class", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    exams?: boolean | Student$examsArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    detain?: boolean | Student$detainArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs>[]
      detain: Prisma.$DetainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: number
      name: string
      email: string
      department: $Enums.Department
      semester: number
      class: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Student$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Student$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends Student$examsArgs<ExtArgs> = {}>(args?: Subset<T, Student$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends Student$marksArgs<ExtArgs> = {}>(args?: Subset<T, Student$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detain<T extends Student$detainArgs<ExtArgs> = {}>(args?: Subset<T, Student$detainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly studentId: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly department: FieldRef<"Student", 'Department'>
    readonly semester: FieldRef<"Student", 'Int'>
    readonly class: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.subjects
   */
  export type Student$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Student.exams
   */
  export type Student$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Student.marks
   */
  export type Student$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Student.detain
   */
  export type Student$detainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    where?: DetainWhereInput
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    cursor?: DetainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    subjectId: number | null
    facultyId: number | null
    totalMarks: number | null
    effectiveMarks: number | null
    yearId: number | null
  }

  export type ExamSumAggregateOutputType = {
    subjectId: number | null
    facultyId: number | null
    totalMarks: number | null
    effectiveMarks: number | null
    yearId: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    subjectId: number | null
    facultyId: number | null
    totalMarks: number | null
    effectiveMarks: number | null
    class1: boolean | null
    class2: boolean | null
    status: $Enums.ExamStatus | null
    yearId: number | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    subjectId: number | null
    facultyId: number | null
    totalMarks: number | null
    effectiveMarks: number | null
    class1: boolean | null
    class2: boolean | null
    status: $Enums.ExamStatus | null
    yearId: number | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    name: number
    date: number
    subjectId: number
    facultyId: number
    totalMarks: number
    effectiveMarks: number
    class1: number
    class2: number
    status: number
    yearId: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    subjectId?: true
    facultyId?: true
    totalMarks?: true
    effectiveMarks?: true
    yearId?: true
  }

  export type ExamSumAggregateInputType = {
    subjectId?: true
    facultyId?: true
    totalMarks?: true
    effectiveMarks?: true
    yearId?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    subjectId?: true
    facultyId?: true
    totalMarks?: true
    effectiveMarks?: true
    class1?: true
    class2?: true
    status?: true
    yearId?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    subjectId?: true
    facultyId?: true
    totalMarks?: true
    effectiveMarks?: true
    class1?: true
    class2?: true
    status?: true
    yearId?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    subjectId?: true
    facultyId?: true
    totalMarks?: true
    effectiveMarks?: true
    class1?: true
    class2?: true
    status?: true
    yearId?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    name: string
    date: Date | null
    subjectId: number
    facultyId: number
    totalMarks: number | null
    effectiveMarks: number | null
    class1: boolean | null
    class2: boolean | null
    status: $Enums.ExamStatus | null
    yearId: number
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    subjectId?: boolean
    facultyId?: boolean
    totalMarks?: boolean
    effectiveMarks?: boolean
    class1?: boolean
    class2?: boolean
    status?: boolean
    yearId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    eligibleStudents?: boolean | Exam$eligibleStudentsArgs<ExtArgs>
    marks?: boolean | Exam$marksArgs<ExtArgs>
    detain?: boolean | Exam$detainArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    subjectId?: boolean
    facultyId?: boolean
    totalMarks?: boolean
    effectiveMarks?: boolean
    class1?: boolean
    class2?: boolean
    status?: boolean
    yearId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    subjectId?: boolean
    facultyId?: boolean
    totalMarks?: boolean
    effectiveMarks?: boolean
    class1?: boolean
    class2?: boolean
    status?: boolean
    yearId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    subjectId?: boolean
    facultyId?: boolean
    totalMarks?: boolean
    effectiveMarks?: boolean
    class1?: boolean
    class2?: boolean
    status?: boolean
    yearId?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "subjectId" | "facultyId" | "totalMarks" | "effectiveMarks" | "class1" | "class2" | "status" | "yearId", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    eligibleStudents?: boolean | Exam$eligibleStudentsArgs<ExtArgs>
    marks?: boolean | Exam$marksArgs<ExtArgs>
    detain?: boolean | Exam$detainArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      faculty: Prisma.$UserPayload<ExtArgs>
      eligibleStudents: Prisma.$StudentPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs> | null
      detain: Prisma.$DetainPayload<ExtArgs>[]
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date | null
      subjectId: number
      facultyId: number
      totalMarks: number | null
      effectiveMarks: number | null
      class1: boolean | null
      class2: boolean | null
      status: $Enums.ExamStatus | null
      yearId: number
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    faculty<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eligibleStudents<T extends Exam$eligibleStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$eligibleStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends Exam$marksArgs<ExtArgs> = {}>(args?: Subset<T, Exam$marksArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detain<T extends Exam$detainArgs<ExtArgs> = {}>(args?: Subset<T, Exam$detainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly name: FieldRef<"Exam", 'String'>
    readonly date: FieldRef<"Exam", 'DateTime'>
    readonly subjectId: FieldRef<"Exam", 'Int'>
    readonly facultyId: FieldRef<"Exam", 'Int'>
    readonly totalMarks: FieldRef<"Exam", 'Int'>
    readonly effectiveMarks: FieldRef<"Exam", 'Int'>
    readonly class1: FieldRef<"Exam", 'Boolean'>
    readonly class2: FieldRef<"Exam", 'Boolean'>
    readonly status: FieldRef<"Exam", 'ExamStatus'>
    readonly yearId: FieldRef<"Exam", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.eligibleStudents
   */
  export type Exam$eligibleStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Exam.marks
   */
  export type Exam$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
  }

  /**
   * Exam.detain
   */
  export type Exam$detainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    where?: DetainWhereInput
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    cursor?: DetainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Marks
   */

  export type AggregateMarks = {
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  export type MarksAvgAggregateOutputType = {
    earnedMarks: number | null
    effectiveMarks: number | null
    yearId: number | null
  }

  export type MarksSumAggregateOutputType = {
    earnedMarks: number | null
    effectiveMarks: number | null
    yearId: number | null
  }

  export type MarksMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    earnedMarks: number | null
    effectiveMarks: number | null
    examId: string | null
    yearId: number | null
  }

  export type MarksMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    earnedMarks: number | null
    effectiveMarks: number | null
    examId: string | null
    yearId: number | null
  }

  export type MarksCountAggregateOutputType = {
    id: number
    studentId: number
    earnedMarks: number
    effectiveMarks: number
    examId: number
    yearId: number
    _all: number
  }


  export type MarksAvgAggregateInputType = {
    earnedMarks?: true
    effectiveMarks?: true
    yearId?: true
  }

  export type MarksSumAggregateInputType = {
    earnedMarks?: true
    effectiveMarks?: true
    yearId?: true
  }

  export type MarksMinAggregateInputType = {
    id?: true
    studentId?: true
    earnedMarks?: true
    effectiveMarks?: true
    examId?: true
    yearId?: true
  }

  export type MarksMaxAggregateInputType = {
    id?: true
    studentId?: true
    earnedMarks?: true
    effectiveMarks?: true
    examId?: true
    yearId?: true
  }

  export type MarksCountAggregateInputType = {
    id?: true
    studentId?: true
    earnedMarks?: true
    effectiveMarks?: true
    examId?: true
    yearId?: true
    _all?: true
  }

  export type MarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to aggregate.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarksMaxAggregateInputType
  }

  export type GetMarksAggregateType<T extends MarksAggregateArgs> = {
        [P in keyof T & keyof AggregateMarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarks[P]>
      : GetScalarType<T[P], AggregateMarks[P]>
  }




  export type MarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithAggregationInput | MarksOrderByWithAggregationInput[]
    by: MarksScalarFieldEnum[] | MarksScalarFieldEnum
    having?: MarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarksCountAggregateInputType | true
    _avg?: MarksAvgAggregateInputType
    _sum?: MarksSumAggregateInputType
    _min?: MarksMinAggregateInputType
    _max?: MarksMaxAggregateInputType
  }

  export type MarksGroupByOutputType = {
    id: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
    yearId: number
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  type GetMarksGroupByPayload<T extends MarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarksGroupByOutputType[P]>
            : GetScalarType<T[P], MarksGroupByOutputType[P]>
        }
      >
    >


  export type MarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    earnedMarks?: boolean
    effectiveMarks?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    earnedMarks?: boolean
    effectiveMarks?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    earnedMarks?: boolean
    effectiveMarks?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectScalar = {
    id?: boolean
    studentId?: boolean
    earnedMarks?: boolean
    effectiveMarks?: boolean
    examId?: boolean
    yearId?: boolean
  }

  export type MarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "earnedMarks" | "effectiveMarks" | "examId" | "yearId", ExtArgs["result"]["marks"]>
  export type MarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type MarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type MarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }

  export type $MarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marks"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      earnedMarks: number
      effectiveMarks: number
      examId: string
      yearId: number
    }, ExtArgs["result"]["marks"]>
    composites: {}
  }

  type MarksGetPayload<S extends boolean | null | undefined | MarksDefaultArgs> = $Result.GetResult<Prisma.$MarksPayload, S>

  type MarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarksCountAggregateInputType | true
    }

  export interface MarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marks'], meta: { name: 'Marks' } }
    /**
     * Find zero or one Marks that matches the filter.
     * @param {MarksFindUniqueArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarksFindUniqueArgs>(args: SelectSubset<T, MarksFindUniqueArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarksFindUniqueOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarksFindUniqueOrThrowArgs>(args: SelectSubset<T, MarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarksFindFirstArgs>(args?: SelectSubset<T, MarksFindFirstArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarksFindFirstOrThrowArgs>(args?: SelectSubset<T, MarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.marks.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.marks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marksWithIdOnly = await prisma.marks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarksFindManyArgs>(args?: SelectSubset<T, MarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marks.
     * @param {MarksCreateArgs} args - Arguments to create a Marks.
     * @example
     * // Create one Marks
     * const Marks = await prisma.marks.create({
     *   data: {
     *     // ... data to create a Marks
     *   }
     * })
     * 
     */
    create<T extends MarksCreateArgs>(args: SelectSubset<T, MarksCreateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarksCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarksCreateManyArgs>(args?: SelectSubset<T, MarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarksCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarksCreateManyAndReturnArgs>(args?: SelectSubset<T, MarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marks.
     * @param {MarksDeleteArgs} args - Arguments to delete one Marks.
     * @example
     * // Delete one Marks
     * const Marks = await prisma.marks.delete({
     *   where: {
     *     // ... filter to delete one Marks
     *   }
     * })
     * 
     */
    delete<T extends MarksDeleteArgs>(args: SelectSubset<T, MarksDeleteArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marks.
     * @param {MarksUpdateArgs} args - Arguments to update one Marks.
     * @example
     * // Update one Marks
     * const marks = await prisma.marks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarksUpdateArgs>(args: SelectSubset<T, MarksUpdateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarksDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.marks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarksDeleteManyArgs>(args?: SelectSubset<T, MarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarksUpdateManyArgs>(args: SelectSubset<T, MarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarksUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarksUpdateManyAndReturnArgs>(args: SelectSubset<T, MarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marks.
     * @param {MarksUpsertArgs} args - Arguments to update or create a Marks.
     * @example
     * // Update or create a Marks
     * const marks = await prisma.marks.upsert({
     *   create: {
     *     // ... data to create a Marks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marks we want to update
     *   }
     * })
     */
    upsert<T extends MarksUpsertArgs>(args: SelectSubset<T, MarksUpsertArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.marks.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarksCountArgs>(
      args?: Subset<T, MarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarksAggregateArgs>(args: Subset<T, MarksAggregateArgs>): Prisma.PrismaPromise<GetMarksAggregateType<T>>

    /**
     * Group by Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksGroupByArgs} args - Group by arguments.
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
      T extends MarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarksGroupByArgs['orderBy'] }
        : { orderBy?: MarksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marks model
   */
  readonly fields: MarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marks model
   */
  interface MarksFieldRefs {
    readonly id: FieldRef<"Marks", 'String'>
    readonly studentId: FieldRef<"Marks", 'String'>
    readonly earnedMarks: FieldRef<"Marks", 'Int'>
    readonly effectiveMarks: FieldRef<"Marks", 'Int'>
    readonly examId: FieldRef<"Marks", 'String'>
    readonly yearId: FieldRef<"Marks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Marks findUnique
   */
  export type MarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findUniqueOrThrow
   */
  export type MarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findFirst
   */
  export type MarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findFirstOrThrow
   */
  export type MarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findMany
   */
  export type MarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks create
   */
  export type MarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Marks.
     */
    data: XOR<MarksCreateInput, MarksUncheckedCreateInput>
  }

  /**
   * Marks createMany
   */
  export type MarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marks createManyAndReturn
   */
  export type MarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks update
   */
  export type MarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Marks.
     */
    data: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
    /**
     * Choose, which Marks to update.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks updateMany
   */
  export type MarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Marks updateManyAndReturn
   */
  export type MarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks upsert
   */
  export type MarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Marks to update in case it exists.
     */
    where: MarksWhereUniqueInput
    /**
     * In case the Marks found by the `where` argument doesn't exist, create a new Marks with this data.
     */
    create: XOR<MarksCreateInput, MarksUncheckedCreateInput>
    /**
     * In case the Marks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
  }

  /**
   * Marks delete
   */
  export type MarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter which Marks to delete.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks deleteMany
   */
  export type MarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Marks without action
   */
  export type MarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
  }


  /**
   * Model Detain
   */

  export type AggregateDetain = {
    _count: DetainCountAggregateOutputType | null
    _avg: DetainAvgAggregateOutputType | null
    _sum: DetainSumAggregateOutputType | null
    _min: DetainMinAggregateOutputType | null
    _max: DetainMaxAggregateOutputType | null
  }

  export type DetainAvgAggregateOutputType = {
    id: number | null
    yearId: number | null
  }

  export type DetainSumAggregateOutputType = {
    id: number | null
    yearId: number | null
  }

  export type DetainMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    examId: string | null
    yearId: number | null
  }

  export type DetainMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    examId: string | null
    yearId: number | null
  }

  export type DetainCountAggregateOutputType = {
    id: number
    studentId: number
    examId: number
    yearId: number
    _all: number
  }


  export type DetainAvgAggregateInputType = {
    id?: true
    yearId?: true
  }

  export type DetainSumAggregateInputType = {
    id?: true
    yearId?: true
  }

  export type DetainMinAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    yearId?: true
  }

  export type DetainMaxAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    yearId?: true
  }

  export type DetainCountAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    yearId?: true
    _all?: true
  }

  export type DetainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detain to aggregate.
     */
    where?: DetainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detains to fetch.
     */
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detains
    **/
    _count?: true | DetainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetainMaxAggregateInputType
  }

  export type GetDetainAggregateType<T extends DetainAggregateArgs> = {
        [P in keyof T & keyof AggregateDetain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetain[P]>
      : GetScalarType<T[P], AggregateDetain[P]>
  }




  export type DetainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetainWhereInput
    orderBy?: DetainOrderByWithAggregationInput | DetainOrderByWithAggregationInput[]
    by: DetainScalarFieldEnum[] | DetainScalarFieldEnum
    having?: DetainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetainCountAggregateInputType | true
    _avg?: DetainAvgAggregateInputType
    _sum?: DetainSumAggregateInputType
    _min?: DetainMinAggregateInputType
    _max?: DetainMaxAggregateInputType
  }

  export type DetainGroupByOutputType = {
    id: number
    studentId: string
    examId: string
    yearId: number
    _count: DetainCountAggregateOutputType | null
    _avg: DetainAvgAggregateOutputType | null
    _sum: DetainSumAggregateOutputType | null
    _min: DetainMinAggregateOutputType | null
    _max: DetainMaxAggregateOutputType | null
  }

  type GetDetainGroupByPayload<T extends DetainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetainGroupByOutputType[P]>
            : GetScalarType<T[P], DetainGroupByOutputType[P]>
        }
      >
    >


  export type DetainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detain"]>

  export type DetainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detain"]>

  export type DetainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    yearId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detain"]>

  export type DetainSelectScalar = {
    id?: boolean
    studentId?: boolean
    examId?: boolean
    yearId?: boolean
  }

  export type DetainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "examId" | "yearId", ExtArgs["result"]["detain"]>
  export type DetainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type DetainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }
  export type DetainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
  }

  export type $DetainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detain"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      examId: string
      yearId: number
    }, ExtArgs["result"]["detain"]>
    composites: {}
  }

  type DetainGetPayload<S extends boolean | null | undefined | DetainDefaultArgs> = $Result.GetResult<Prisma.$DetainPayload, S>

  type DetainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetainCountAggregateInputType | true
    }

  export interface DetainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detain'], meta: { name: 'Detain' } }
    /**
     * Find zero or one Detain that matches the filter.
     * @param {DetainFindUniqueArgs} args - Arguments to find a Detain
     * @example
     * // Get one Detain
     * const detain = await prisma.detain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetainFindUniqueArgs>(args: SelectSubset<T, DetainFindUniqueArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetainFindUniqueOrThrowArgs} args - Arguments to find a Detain
     * @example
     * // Get one Detain
     * const detain = await prisma.detain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetainFindUniqueOrThrowArgs>(args: SelectSubset<T, DetainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainFindFirstArgs} args - Arguments to find a Detain
     * @example
     * // Get one Detain
     * const detain = await prisma.detain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetainFindFirstArgs>(args?: SelectSubset<T, DetainFindFirstArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainFindFirstOrThrowArgs} args - Arguments to find a Detain
     * @example
     * // Get one Detain
     * const detain = await prisma.detain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetainFindFirstOrThrowArgs>(args?: SelectSubset<T, DetainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detains
     * const detains = await prisma.detain.findMany()
     * 
     * // Get first 10 Detains
     * const detains = await prisma.detain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detainWithIdOnly = await prisma.detain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetainFindManyArgs>(args?: SelectSubset<T, DetainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detain.
     * @param {DetainCreateArgs} args - Arguments to create a Detain.
     * @example
     * // Create one Detain
     * const Detain = await prisma.detain.create({
     *   data: {
     *     // ... data to create a Detain
     *   }
     * })
     * 
     */
    create<T extends DetainCreateArgs>(args: SelectSubset<T, DetainCreateArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detains.
     * @param {DetainCreateManyArgs} args - Arguments to create many Detains.
     * @example
     * // Create many Detains
     * const detain = await prisma.detain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetainCreateManyArgs>(args?: SelectSubset<T, DetainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detains and returns the data saved in the database.
     * @param {DetainCreateManyAndReturnArgs} args - Arguments to create many Detains.
     * @example
     * // Create many Detains
     * const detain = await prisma.detain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detains and only return the `id`
     * const detainWithIdOnly = await prisma.detain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetainCreateManyAndReturnArgs>(args?: SelectSubset<T, DetainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detain.
     * @param {DetainDeleteArgs} args - Arguments to delete one Detain.
     * @example
     * // Delete one Detain
     * const Detain = await prisma.detain.delete({
     *   where: {
     *     // ... filter to delete one Detain
     *   }
     * })
     * 
     */
    delete<T extends DetainDeleteArgs>(args: SelectSubset<T, DetainDeleteArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detain.
     * @param {DetainUpdateArgs} args - Arguments to update one Detain.
     * @example
     * // Update one Detain
     * const detain = await prisma.detain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetainUpdateArgs>(args: SelectSubset<T, DetainUpdateArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detains.
     * @param {DetainDeleteManyArgs} args - Arguments to filter Detains to delete.
     * @example
     * // Delete a few Detains
     * const { count } = await prisma.detain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetainDeleteManyArgs>(args?: SelectSubset<T, DetainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detains
     * const detain = await prisma.detain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetainUpdateManyArgs>(args: SelectSubset<T, DetainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detains and returns the data updated in the database.
     * @param {DetainUpdateManyAndReturnArgs} args - Arguments to update many Detains.
     * @example
     * // Update many Detains
     * const detain = await prisma.detain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detains and only return the `id`
     * const detainWithIdOnly = await prisma.detain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetainUpdateManyAndReturnArgs>(args: SelectSubset<T, DetainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detain.
     * @param {DetainUpsertArgs} args - Arguments to update or create a Detain.
     * @example
     * // Update or create a Detain
     * const detain = await prisma.detain.upsert({
     *   create: {
     *     // ... data to create a Detain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detain we want to update
     *   }
     * })
     */
    upsert<T extends DetainUpsertArgs>(args: SelectSubset<T, DetainUpsertArgs<ExtArgs>>): Prisma__DetainClient<$Result.GetResult<Prisma.$DetainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainCountArgs} args - Arguments to filter Detains to count.
     * @example
     * // Count the number of Detains
     * const count = await prisma.detain.count({
     *   where: {
     *     // ... the filter for the Detains we want to count
     *   }
     * })
    **/
    count<T extends DetainCountArgs>(
      args?: Subset<T, DetainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetainAggregateArgs>(args: Subset<T, DetainAggregateArgs>): Prisma.PrismaPromise<GetDetainAggregateType<T>>

    /**
     * Group by Detain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetainGroupByArgs} args - Group by arguments.
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
      T extends DetainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetainGroupByArgs['orderBy'] }
        : { orderBy?: DetainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DetainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detain model
   */
  readonly fields: DetainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detain model
   */
  interface DetainFieldRefs {
    readonly id: FieldRef<"Detain", 'Int'>
    readonly studentId: FieldRef<"Detain", 'String'>
    readonly examId: FieldRef<"Detain", 'String'>
    readonly yearId: FieldRef<"Detain", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Detain findUnique
   */
  export type DetainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter, which Detain to fetch.
     */
    where: DetainWhereUniqueInput
  }

  /**
   * Detain findUniqueOrThrow
   */
  export type DetainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter, which Detain to fetch.
     */
    where: DetainWhereUniqueInput
  }

  /**
   * Detain findFirst
   */
  export type DetainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter, which Detain to fetch.
     */
    where?: DetainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detains to fetch.
     */
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detains.
     */
    cursor?: DetainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detains.
     */
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Detain findFirstOrThrow
   */
  export type DetainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter, which Detain to fetch.
     */
    where?: DetainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detains to fetch.
     */
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detains.
     */
    cursor?: DetainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detains.
     */
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Detain findMany
   */
  export type DetainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter, which Detains to fetch.
     */
    where?: DetainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detains to fetch.
     */
    orderBy?: DetainOrderByWithRelationInput | DetainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detains.
     */
    cursor?: DetainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detains.
     */
    skip?: number
    distinct?: DetainScalarFieldEnum | DetainScalarFieldEnum[]
  }

  /**
   * Detain create
   */
  export type DetainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * The data needed to create a Detain.
     */
    data: XOR<DetainCreateInput, DetainUncheckedCreateInput>
  }

  /**
   * Detain createMany
   */
  export type DetainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detains.
     */
    data: DetainCreateManyInput | DetainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detain createManyAndReturn
   */
  export type DetainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * The data used to create many Detains.
     */
    data: DetainCreateManyInput | DetainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detain update
   */
  export type DetainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * The data needed to update a Detain.
     */
    data: XOR<DetainUpdateInput, DetainUncheckedUpdateInput>
    /**
     * Choose, which Detain to update.
     */
    where: DetainWhereUniqueInput
  }

  /**
   * Detain updateMany
   */
  export type DetainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detains.
     */
    data: XOR<DetainUpdateManyMutationInput, DetainUncheckedUpdateManyInput>
    /**
     * Filter which Detains to update
     */
    where?: DetainWhereInput
    /**
     * Limit how many Detains to update.
     */
    limit?: number
  }

  /**
   * Detain updateManyAndReturn
   */
  export type DetainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * The data used to update Detains.
     */
    data: XOR<DetainUpdateManyMutationInput, DetainUncheckedUpdateManyInput>
    /**
     * Filter which Detains to update
     */
    where?: DetainWhereInput
    /**
     * Limit how many Detains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detain upsert
   */
  export type DetainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * The filter to search for the Detain to update in case it exists.
     */
    where: DetainWhereUniqueInput
    /**
     * In case the Detain found by the `where` argument doesn't exist, create a new Detain with this data.
     */
    create: XOR<DetainCreateInput, DetainUncheckedCreateInput>
    /**
     * In case the Detain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetainUpdateInput, DetainUncheckedUpdateInput>
  }

  /**
   * Detain delete
   */
  export type DetainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
    /**
     * Filter which Detain to delete.
     */
    where: DetainWhereUniqueInput
  }

  /**
   * Detain deleteMany
   */
  export type DetainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detains to delete
     */
    where?: DetainWhereInput
    /**
     * Limit how many Detains to delete.
     */
    limit?: number
  }

  /**
   * Detain without action
   */
  export type DetainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detain
     */
    select?: DetainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detain
     */
    omit?: DetainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetainInclude<ExtArgs> | null
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


  export const YearScalarFieldEnum: {
    id: 'id',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type YearScalarFieldEnum = (typeof YearScalarFieldEnum)[keyof typeof YearScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    department: 'department',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    semester: 'semester',
    coordinatorId: 'coordinatorId',
    type: 'type',
    dep_IT: 'dep_IT',
    dep_CE: 'dep_CE',
    dep_CSE: 'dep_CSE',
    theory_hour: 'theory_hour',
    practical_hour: 'practical_hour',
    theory_credite: 'theory_credite',
    practical_credite: 'practical_credite',
    theory_int_marks: 'theory_int_marks',
    practical_int_marks: 'practical_int_marks',
    theory_ext_marks: 'theory_ext_marks',
    practical_ext_marks: 'practical_ext_marks',
    yearId: 'yearId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const SubjectFacultyScalarFieldEnum: {
    id: 'id',
    facultyId: 'facultyId',
    subjectId: 'subjectId',
    role: 'role',
    yearId: 'yearId'
  };

  export type SubjectFacultyScalarFieldEnum = (typeof SubjectFacultyScalarFieldEnum)[keyof typeof SubjectFacultyScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    name: 'name',
    email: 'email',
    department: 'department',
    semester: 'semester',
    class: 'class'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    subjectId: 'subjectId',
    facultyId: 'facultyId',
    totalMarks: 'totalMarks',
    effectiveMarks: 'effectiveMarks',
    class1: 'class1',
    class2: 'class2',
    status: 'status',
    yearId: 'yearId'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const MarksScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    earnedMarks: 'earnedMarks',
    effectiveMarks: 'effectiveMarks',
    examId: 'examId',
    yearId: 'yearId'
  };

  export type MarksScalarFieldEnum = (typeof MarksScalarFieldEnum)[keyof typeof MarksScalarFieldEnum]


  export const DetainScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId',
    yearId: 'yearId'
  };

  export type DetainScalarFieldEnum = (typeof DetainScalarFieldEnum)[keyof typeof DetainScalarFieldEnum]


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
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'SubjectType'
   */
  export type EnumSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectType'>
    


  /**
   * Reference to a field of type 'SubjectType[]'
   */
  export type ListEnumSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubjectFacultyRole'
   */
  export type EnumSubjectFacultyRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectFacultyRole'>
    


  /**
   * Reference to a field of type 'SubjectFacultyRole[]'
   */
  export type ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectFacultyRole[]'>
    


  /**
   * Reference to a field of type 'ExamStatus'
   */
  export type EnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus'>
    


  /**
   * Reference to a field of type 'ExamStatus[]'
   */
  export type ListEnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type YearWhereInput = {
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    id?: IntFilter<"Year"> | number
    year?: StringFilter<"Year"> | string
    startDate?: DateTimeFilter<"Year"> | Date | string
    endDate?: DateTimeFilter<"Year"> | Date | string
    subject?: SubjectListRelationFilter
    subjectFaculty?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
    marks?: MarksListRelationFilter
    detain?: DetainListRelationFilter
  }

  export type YearOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    subject?: SubjectOrderByRelationAggregateInput
    subjectFaculty?: SubjectFacultyOrderByRelationAggregateInput
    exam?: ExamOrderByRelationAggregateInput
    marks?: MarksOrderByRelationAggregateInput
    detain?: DetainOrderByRelationAggregateInput
  }

  export type YearWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year?: string
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    startDate?: DateTimeFilter<"Year"> | Date | string
    endDate?: DateTimeFilter<"Year"> | Date | string
    subject?: SubjectListRelationFilter
    subjectFaculty?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
    marks?: MarksListRelationFilter
    detain?: DetainListRelationFilter
  }, "id" | "id" | "year">

  export type YearOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: YearCountOrderByAggregateInput
    _avg?: YearAvgOrderByAggregateInput
    _max?: YearMaxOrderByAggregateInput
    _min?: YearMinOrderByAggregateInput
    _sum?: YearSumOrderByAggregateInput
  }

  export type YearScalarWhereWithAggregatesInput = {
    AND?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    OR?: YearScalarWhereWithAggregatesInput[]
    NOT?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Year"> | number
    year?: StringWithAggregatesFilter<"Year"> | string
    startDate?: DateTimeWithAggregatesFilter<"Year"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Year"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    subjectCoordinator?: SubjectListRelationFilter
    subjectFaculty?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    role?: SortOrder
    subjectCoordinator?: SubjectOrderByRelationAggregateInput
    subjectFaculty?: SubjectFacultyOrderByRelationAggregateInput
    exam?: ExamOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    subjectCoordinator?: SubjectListRelationFilter
    subjectFaculty?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
  }, "id" | "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    department?: EnumDepartmentWithAggregatesFilter<"User"> | $Enums.Department
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
    coordinatorId?: IntFilter<"Subject"> | number
    type?: EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType
    dep_IT?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CE?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CSE?: BoolNullableFilter<"Subject"> | boolean | null
    theory_hour?: IntNullableFilter<"Subject"> | number | null
    practical_hour?: IntNullableFilter<"Subject"> | number | null
    theory_credite?: IntNullableFilter<"Subject"> | number | null
    practical_credite?: IntNullableFilter<"Subject"> | number | null
    theory_int_marks?: IntNullableFilter<"Subject"> | number | null
    practical_int_marks?: IntNullableFilter<"Subject"> | number | null
    theory_ext_marks?: IntNullableFilter<"Subject"> | number | null
    practical_ext_marks?: IntNullableFilter<"Subject"> | number | null
    yearId?: IntFilter<"Subject"> | number
    subjectCoordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
    faculties?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    type?: SortOrder
    dep_IT?: SortOrderInput | SortOrder
    dep_CE?: SortOrderInput | SortOrder
    dep_CSE?: SortOrderInput | SortOrder
    theory_hour?: SortOrderInput | SortOrder
    practical_hour?: SortOrderInput | SortOrder
    theory_credite?: SortOrderInput | SortOrder
    practical_credite?: SortOrderInput | SortOrder
    theory_int_marks?: SortOrderInput | SortOrder
    practical_int_marks?: SortOrderInput | SortOrder
    theory_ext_marks?: SortOrderInput | SortOrder
    practical_ext_marks?: SortOrderInput | SortOrder
    yearId?: SortOrder
    subjectCoordinator?: UserOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    faculties?: SubjectFacultyOrderByRelationAggregateInput
    exam?: ExamOrderByRelationAggregateInput
    year?: YearOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
    coordinatorId?: IntFilter<"Subject"> | number
    type?: EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType
    dep_IT?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CE?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CSE?: BoolNullableFilter<"Subject"> | boolean | null
    theory_hour?: IntNullableFilter<"Subject"> | number | null
    practical_hour?: IntNullableFilter<"Subject"> | number | null
    theory_credite?: IntNullableFilter<"Subject"> | number | null
    practical_credite?: IntNullableFilter<"Subject"> | number | null
    theory_int_marks?: IntNullableFilter<"Subject"> | number | null
    practical_int_marks?: IntNullableFilter<"Subject"> | number | null
    theory_ext_marks?: IntNullableFilter<"Subject"> | number | null
    practical_ext_marks?: IntNullableFilter<"Subject"> | number | null
    yearId?: IntFilter<"Subject"> | number
    subjectCoordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
    faculties?: SubjectFacultyListRelationFilter
    exam?: ExamListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id" | "code">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    type?: SortOrder
    dep_IT?: SortOrderInput | SortOrder
    dep_CE?: SortOrderInput | SortOrder
    dep_CSE?: SortOrderInput | SortOrder
    theory_hour?: SortOrderInput | SortOrder
    practical_hour?: SortOrderInput | SortOrder
    theory_credite?: SortOrderInput | SortOrder
    practical_credite?: SortOrderInput | SortOrder
    theory_int_marks?: SortOrderInput | SortOrder
    practical_int_marks?: SortOrderInput | SortOrder
    theory_ext_marks?: SortOrderInput | SortOrder
    practical_ext_marks?: SortOrderInput | SortOrder
    yearId?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    code?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    semester?: IntWithAggregatesFilter<"Subject"> | number
    coordinatorId?: IntWithAggregatesFilter<"Subject"> | number
    type?: EnumSubjectTypeWithAggregatesFilter<"Subject"> | $Enums.SubjectType
    dep_IT?: BoolNullableWithAggregatesFilter<"Subject"> | boolean | null
    dep_CE?: BoolNullableWithAggregatesFilter<"Subject"> | boolean | null
    dep_CSE?: BoolNullableWithAggregatesFilter<"Subject"> | boolean | null
    theory_hour?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    practical_hour?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    theory_credite?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    practical_credite?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    theory_int_marks?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    practical_int_marks?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    theory_ext_marks?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    practical_ext_marks?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    yearId?: IntWithAggregatesFilter<"Subject"> | number
  }

  export type SubjectFacultyWhereInput = {
    AND?: SubjectFacultyWhereInput | SubjectFacultyWhereInput[]
    OR?: SubjectFacultyWhereInput[]
    NOT?: SubjectFacultyWhereInput | SubjectFacultyWhereInput[]
    id?: StringFilter<"SubjectFaculty"> | string
    facultyId?: IntFilter<"SubjectFaculty"> | number
    subjectId?: IntFilter<"SubjectFaculty"> | number
    role?: EnumSubjectFacultyRoleFilter<"SubjectFaculty"> | $Enums.SubjectFacultyRole
    yearId?: IntFilter<"SubjectFaculty"> | number
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type SubjectFacultyOrderByWithRelationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    subjectId?: SortOrder
    role?: SortOrder
    yearId?: SortOrder
    faculty?: UserOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    year?: YearOrderByWithRelationInput
  }

  export type SubjectFacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectFacultyWhereInput | SubjectFacultyWhereInput[]
    OR?: SubjectFacultyWhereInput[]
    NOT?: SubjectFacultyWhereInput | SubjectFacultyWhereInput[]
    facultyId?: IntFilter<"SubjectFaculty"> | number
    subjectId?: IntFilter<"SubjectFaculty"> | number
    role?: EnumSubjectFacultyRoleFilter<"SubjectFaculty"> | $Enums.SubjectFacultyRole
    yearId?: IntFilter<"SubjectFaculty"> | number
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id" | "id">

  export type SubjectFacultyOrderByWithAggregationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    subjectId?: SortOrder
    role?: SortOrder
    yearId?: SortOrder
    _count?: SubjectFacultyCountOrderByAggregateInput
    _avg?: SubjectFacultyAvgOrderByAggregateInput
    _max?: SubjectFacultyMaxOrderByAggregateInput
    _min?: SubjectFacultyMinOrderByAggregateInput
    _sum?: SubjectFacultySumOrderByAggregateInput
  }

  export type SubjectFacultyScalarWhereWithAggregatesInput = {
    AND?: SubjectFacultyScalarWhereWithAggregatesInput | SubjectFacultyScalarWhereWithAggregatesInput[]
    OR?: SubjectFacultyScalarWhereWithAggregatesInput[]
    NOT?: SubjectFacultyScalarWhereWithAggregatesInput | SubjectFacultyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubjectFaculty"> | string
    facultyId?: IntWithAggregatesFilter<"SubjectFaculty"> | number
    subjectId?: IntWithAggregatesFilter<"SubjectFaculty"> | number
    role?: EnumSubjectFacultyRoleWithAggregatesFilter<"SubjectFaculty"> | $Enums.SubjectFacultyRole
    yearId?: IntWithAggregatesFilter<"SubjectFaculty"> | number
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    studentId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    semester?: IntFilter<"Student"> | number
    class?: StringFilter<"Student"> | string
    subjects?: SubjectListRelationFilter
    exams?: ExamListRelationFilter
    marks?: MarksListRelationFilter
    detain?: DetainListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    class?: SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
    marks?: MarksOrderByRelationAggregateInput
    detain?: DetainOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: number
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    semester?: IntFilter<"Student"> | number
    class?: StringFilter<"Student"> | string
    subjects?: SubjectListRelationFilter
    exams?: ExamListRelationFilter
    marks?: MarksListRelationFilter
    detain?: DetainListRelationFilter
  }, "id" | "id" | "studentId" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    class?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    studentId?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    department?: EnumDepartmentWithAggregatesFilter<"Student"> | $Enums.Department
    semester?: IntWithAggregatesFilter<"Student"> | number
    class?: StringWithAggregatesFilter<"Student"> | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    name?: StringFilter<"Exam"> | string
    date?: DateTimeNullableFilter<"Exam"> | Date | string | null
    subjectId?: IntFilter<"Exam"> | number
    facultyId?: IntFilter<"Exam"> | number
    totalMarks?: IntNullableFilter<"Exam"> | number | null
    effectiveMarks?: IntNullableFilter<"Exam"> | number | null
    class1?: BoolNullableFilter<"Exam"> | boolean | null
    class2?: BoolNullableFilter<"Exam"> | boolean | null
    status?: EnumExamStatusNullableFilter<"Exam"> | $Enums.ExamStatus | null
    yearId?: IntFilter<"Exam"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibleStudents?: StudentListRelationFilter
    marks?: XOR<MarksNullableScalarRelationFilter, MarksWhereInput> | null
    detain?: DetainListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrderInput | SortOrder
    effectiveMarks?: SortOrderInput | SortOrder
    class1?: SortOrderInput | SortOrder
    class2?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    yearId?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    faculty?: UserOrderByWithRelationInput
    eligibleStudents?: StudentOrderByRelationAggregateInput
    marks?: MarksOrderByWithRelationInput
    detain?: DetainOrderByRelationAggregateInput
    year?: YearOrderByWithRelationInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    name?: StringFilter<"Exam"> | string
    date?: DateTimeNullableFilter<"Exam"> | Date | string | null
    subjectId?: IntFilter<"Exam"> | number
    facultyId?: IntFilter<"Exam"> | number
    totalMarks?: IntNullableFilter<"Exam"> | number | null
    effectiveMarks?: IntNullableFilter<"Exam"> | number | null
    class1?: BoolNullableFilter<"Exam"> | boolean | null
    class2?: BoolNullableFilter<"Exam"> | boolean | null
    status?: EnumExamStatusNullableFilter<"Exam"> | $Enums.ExamStatus | null
    yearId?: IntFilter<"Exam"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibleStudents?: StudentListRelationFilter
    marks?: XOR<MarksNullableScalarRelationFilter, MarksWhereInput> | null
    detain?: DetainListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id" | "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrderInput | SortOrder
    effectiveMarks?: SortOrderInput | SortOrder
    class1?: SortOrderInput | SortOrder
    class2?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    yearId?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    name?: StringWithAggregatesFilter<"Exam"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null
    subjectId?: IntWithAggregatesFilter<"Exam"> | number
    facultyId?: IntWithAggregatesFilter<"Exam"> | number
    totalMarks?: IntNullableWithAggregatesFilter<"Exam"> | number | null
    effectiveMarks?: IntNullableWithAggregatesFilter<"Exam"> | number | null
    class1?: BoolNullableWithAggregatesFilter<"Exam"> | boolean | null
    class2?: BoolNullableWithAggregatesFilter<"Exam"> | boolean | null
    status?: EnumExamStatusNullableWithAggregatesFilter<"Exam"> | $Enums.ExamStatus | null
    yearId?: IntWithAggregatesFilter<"Exam"> | number
  }

  export type MarksWhereInput = {
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    id?: StringFilter<"Marks"> | string
    studentId?: StringFilter<"Marks"> | string
    earnedMarks?: IntFilter<"Marks"> | number
    effectiveMarks?: IntFilter<"Marks"> | number
    examId?: StringFilter<"Marks"> | string
    yearId?: IntFilter<"Marks"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type MarksOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
    student?: StudentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
    year?: YearOrderByWithRelationInput
  }

  export type MarksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    examId?: string
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    studentId?: StringFilter<"Marks"> | string
    earnedMarks?: IntFilter<"Marks"> | number
    effectiveMarks?: IntFilter<"Marks"> | number
    yearId?: IntFilter<"Marks"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id" | "id" | "examId">

  export type MarksOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
    _count?: MarksCountOrderByAggregateInput
    _avg?: MarksAvgOrderByAggregateInput
    _max?: MarksMaxOrderByAggregateInput
    _min?: MarksMinOrderByAggregateInput
    _sum?: MarksSumOrderByAggregateInput
  }

  export type MarksScalarWhereWithAggregatesInput = {
    AND?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    OR?: MarksScalarWhereWithAggregatesInput[]
    NOT?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marks"> | string
    studentId?: StringWithAggregatesFilter<"Marks"> | string
    earnedMarks?: IntWithAggregatesFilter<"Marks"> | number
    effectiveMarks?: IntWithAggregatesFilter<"Marks"> | number
    examId?: StringWithAggregatesFilter<"Marks"> | string
    yearId?: IntWithAggregatesFilter<"Marks"> | number
  }

  export type DetainWhereInput = {
    AND?: DetainWhereInput | DetainWhereInput[]
    OR?: DetainWhereInput[]
    NOT?: DetainWhereInput | DetainWhereInput[]
    id?: IntFilter<"Detain"> | number
    studentId?: StringFilter<"Detain"> | string
    examId?: StringFilter<"Detain"> | string
    yearId?: IntFilter<"Detain"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type DetainOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
    student?: StudentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
    year?: YearOrderByWithRelationInput
  }

  export type DetainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetainWhereInput | DetainWhereInput[]
    OR?: DetainWhereInput[]
    NOT?: DetainWhereInput | DetainWhereInput[]
    studentId?: StringFilter<"Detain"> | string
    examId?: StringFilter<"Detain"> | string
    yearId?: IntFilter<"Detain"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id" | "id">

  export type DetainOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
    _count?: DetainCountOrderByAggregateInput
    _avg?: DetainAvgOrderByAggregateInput
    _max?: DetainMaxOrderByAggregateInput
    _min?: DetainMinOrderByAggregateInput
    _sum?: DetainSumOrderByAggregateInput
  }

  export type DetainScalarWhereWithAggregatesInput = {
    AND?: DetainScalarWhereWithAggregatesInput | DetainScalarWhereWithAggregatesInput[]
    OR?: DetainScalarWhereWithAggregatesInput[]
    NOT?: DetainScalarWhereWithAggregatesInput | DetainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Detain"> | number
    studentId?: StringWithAggregatesFilter<"Detain"> | string
    examId?: StringWithAggregatesFilter<"Detain"> | string
    yearId?: IntWithAggregatesFilter<"Detain"> | number
  }

  export type YearCreateInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutYearInput
    exam?: ExamCreateNestedManyWithoutYearInput
    marks?: MarksCreateNestedManyWithoutYearInput
    detain?: DetainCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectUncheckedCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutYearInput
    exam?: ExamUncheckedCreateNestedManyWithoutYearInput
    marks?: MarksUncheckedCreateNestedManyWithoutYearInput
    detain?: DetainUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutYearNestedInput
    exam?: ExamUpdateManyWithoutYearNestedInput
    marks?: MarksUpdateManyWithoutYearNestedInput
    detain?: DetainUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUncheckedUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput
    exam?: ExamUncheckedUpdateManyWithoutYearNestedInput
    marks?: MarksUncheckedUpdateManyWithoutYearNestedInput
    detain?: DetainUncheckedUpdateManyWithoutYearNestedInput
  }

  export type YearCreateManyInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
  }

  export type YearUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectCreateNestedManyWithoutSubjectCoordinatorInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutFacultyInput
    exam?: ExamCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedCreateNestedManyWithoutSubjectCoordinatorInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutFacultyInput
    exam?: ExamUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUpdateManyWithoutSubjectCoordinatorNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutFacultyNestedInput
    exam?: ExamUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedUpdateManyWithoutSubjectCoordinatorNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutFacultyNestedInput
    exam?: ExamUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type SubjectCreateInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    subjectCoordinator: UserCreateNestedOneWithoutSubjectCoordinatorInput
    students?: StudentCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyCreateNestedManyWithoutSubjectInput
    exam?: ExamCreateNestedManyWithoutSubjectInput
    year: YearCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
    students?: StudentUncheckedCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput
    exam?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    subjectCoordinator?: UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput
    students?: StudentUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUpdateManyWithoutSubjectNestedInput
    exam?: ExamUpdateManyWithoutSubjectNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput
    exam?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
  }

  export type SubjectUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyCreateInput = {
    id?: string
    role: $Enums.SubjectFacultyRole
    faculty: UserCreateNestedOneWithoutSubjectFacultyInput
    subject: SubjectCreateNestedOneWithoutFacultiesInput
    year: YearCreateNestedOneWithoutSubjectFacultyInput
  }

  export type SubjectFacultyUncheckedCreateInput = {
    id?: string
    facultyId: number
    subjectId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type SubjectFacultyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    faculty?: UserUpdateOneRequiredWithoutSubjectFacultyNestedInput
    subject?: SubjectUpdateOneRequiredWithoutFacultiesNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectFacultyNestedInput
  }

  export type SubjectFacultyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyCreateManyInput = {
    id?: string
    facultyId: number
    subjectId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type SubjectFacultyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
  }

  export type SubjectFacultyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectCreateNestedManyWithoutStudentsInput
    exams?: ExamCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksCreateNestedManyWithoutStudentInput
    detain?: DetainCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    exams?: ExamUncheckedCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksUncheckedCreateNestedManyWithoutStudentInput
    detain?: DetainUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUpdateManyWithoutStudentsNestedInput
    exams?: ExamUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUpdateManyWithoutStudentNestedInput
    detain?: DetainUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    exams?: ExamUncheckedUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUncheckedUpdateManyWithoutStudentNestedInput
    detain?: DetainUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
  }

  export type ExamCreateInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    faculty: UserCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    marks?: MarksCreateNestedOneWithoutExamInput
    detain?: DetainCreateNestedManyWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type MarksCreateInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    student: StudentCreateNestedOneWithoutMarksInput
    exam: ExamCreateNestedOneWithoutMarksInput
    year: YearCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateInput = {
    id?: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
    yearId: number
  }

  export type MarksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
    exam?: ExamUpdateOneRequiredWithoutMarksNestedInput
    year?: YearUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type MarksCreateManyInput = {
    id?: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
    yearId: number
  }

  export type MarksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
  }

  export type MarksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainCreateInput = {
    student: StudentCreateNestedOneWithoutDetainInput
    exam: ExamCreateNestedOneWithoutDetainInput
    year: YearCreateNestedOneWithoutDetainInput
  }

  export type DetainUncheckedCreateInput = {
    id?: number
    studentId: string
    examId: string
    yearId: number
  }

  export type DetainUpdateInput = {
    student?: StudentUpdateOneRequiredWithoutDetainNestedInput
    exam?: ExamUpdateOneRequiredWithoutDetainNestedInput
    year?: YearUpdateOneRequiredWithoutDetainNestedInput
  }

  export type DetainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainCreateManyInput = {
    id?: number
    studentId: string
    examId: string
    yearId: number
  }

  export type DetainUpdateManyMutationInput = {

  }

  export type DetainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectFacultyListRelationFilter = {
    every?: SubjectFacultyWhereInput
    some?: SubjectFacultyWhereInput
    none?: SubjectFacultyWhereInput
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type MarksListRelationFilter = {
    every?: MarksWhereInput
    some?: MarksWhereInput
    none?: MarksWhereInput
  }

  export type DetainListRelationFilter = {
    every?: DetainWhereInput
    some?: DetainWhereInput
    none?: DetainWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectFacultyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YearCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type YearAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YearMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type YearMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type YearSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumSubjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectType | EnumSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeFilter<$PrismaModel> | $Enums.SubjectType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type YearScalarRelationFilter = {
    is?: YearWhereInput
    isNot?: YearWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    type?: SortOrder
    dep_IT?: SortOrder
    dep_CE?: SortOrder
    dep_CSE?: SortOrder
    theory_hour?: SortOrder
    practical_hour?: SortOrder
    theory_credite?: SortOrder
    practical_credite?: SortOrder
    theory_int_marks?: SortOrder
    practical_int_marks?: SortOrder
    theory_ext_marks?: SortOrder
    practical_ext_marks?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    theory_hour?: SortOrder
    practical_hour?: SortOrder
    theory_credite?: SortOrder
    practical_credite?: SortOrder
    theory_int_marks?: SortOrder
    practical_int_marks?: SortOrder
    theory_ext_marks?: SortOrder
    practical_ext_marks?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    type?: SortOrder
    dep_IT?: SortOrder
    dep_CE?: SortOrder
    dep_CSE?: SortOrder
    theory_hour?: SortOrder
    practical_hour?: SortOrder
    theory_credite?: SortOrder
    practical_credite?: SortOrder
    theory_int_marks?: SortOrder
    practical_int_marks?: SortOrder
    theory_ext_marks?: SortOrder
    practical_ext_marks?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    type?: SortOrder
    dep_IT?: SortOrder
    dep_CE?: SortOrder
    dep_CSE?: SortOrder
    theory_hour?: SortOrder
    practical_hour?: SortOrder
    theory_credite?: SortOrder
    practical_credite?: SortOrder
    theory_int_marks?: SortOrder
    practical_int_marks?: SortOrder
    theory_ext_marks?: SortOrder
    practical_ext_marks?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    coordinatorId?: SortOrder
    theory_hour?: SortOrder
    practical_hour?: SortOrder
    theory_credite?: SortOrder
    practical_credite?: SortOrder
    theory_int_marks?: SortOrder
    practical_int_marks?: SortOrder
    theory_ext_marks?: SortOrder
    practical_ext_marks?: SortOrder
    yearId?: SortOrder
  }

  export type EnumSubjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectType | EnumSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectTypeFilter<$PrismaModel>
    _max?: NestedEnumSubjectTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSubjectFacultyRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectFacultyRole | EnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel> | $Enums.SubjectFacultyRole
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type SubjectFacultyCountOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    subjectId?: SortOrder
    role?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectFacultyAvgOrderByAggregateInput = {
    facultyId?: SortOrder
    subjectId?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectFacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    subjectId?: SortOrder
    role?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectFacultyMinOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    subjectId?: SortOrder
    role?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectFacultySumOrderByAggregateInput = {
    facultyId?: SortOrder
    subjectId?: SortOrder
    yearId?: SortOrder
  }

  export type EnumSubjectFacultyRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectFacultyRole | EnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFacultyRoleWithAggregatesFilter<$PrismaModel> | $Enums.SubjectFacultyRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel>
    _max?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel>
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    class?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    studentId?: SortOrder
    semester?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    class?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    class?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    studentId?: SortOrder
    semester?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumExamStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamStatusNullableFilter<$PrismaModel> | $Enums.ExamStatus | null
  }

  export type MarksNullableScalarRelationFilter = {
    is?: MarksWhereInput | null
    isNot?: MarksWhereInput | null
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrder
    effectiveMarks?: SortOrder
    class1?: SortOrder
    class2?: SortOrder
    status?: SortOrder
    yearId?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrder
    effectiveMarks?: SortOrder
    yearId?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrder
    effectiveMarks?: SortOrder
    class1?: SortOrder
    class2?: SortOrder
    status?: SortOrder
    yearId?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrder
    effectiveMarks?: SortOrder
    class1?: SortOrder
    class2?: SortOrder
    status?: SortOrder
    yearId?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    subjectId?: SortOrder
    facultyId?: SortOrder
    totalMarks?: SortOrder
    effectiveMarks?: SortOrder
    yearId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumExamStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExamStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumExamStatusNullableFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type MarksCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type MarksAvgOrderByAggregateInput = {
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    yearId?: SortOrder
  }

  export type MarksMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type MarksMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type MarksSumOrderByAggregateInput = {
    earnedMarks?: SortOrder
    effectiveMarks?: SortOrder
    yearId?: SortOrder
  }

  export type DetainCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type DetainAvgOrderByAggregateInput = {
    id?: SortOrder
    yearId?: SortOrder
  }

  export type DetainMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type DetainMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    yearId?: SortOrder
  }

  export type DetainSumOrderByAggregateInput = {
    id?: SortOrder
    yearId?: SortOrder
  }

  export type SubjectCreateNestedManyWithoutYearInput = {
    create?: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput> | SubjectCreateWithoutYearInput[] | SubjectUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutYearInput | SubjectCreateOrConnectWithoutYearInput[]
    createMany?: SubjectCreateManyYearInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectFacultyCreateNestedManyWithoutYearInput = {
    create?: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput> | SubjectFacultyCreateWithoutYearInput[] | SubjectFacultyUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutYearInput | SubjectFacultyCreateOrConnectWithoutYearInput[]
    createMany?: SubjectFacultyCreateManyYearInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutYearInput = {
    create?: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput> | ExamCreateWithoutYearInput[] | ExamUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutYearInput | ExamCreateOrConnectWithoutYearInput[]
    createMany?: ExamCreateManyYearInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutYearInput = {
    create?: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput> | MarksCreateWithoutYearInput[] | MarksUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutYearInput | MarksCreateOrConnectWithoutYearInput[]
    createMany?: MarksCreateManyYearInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type DetainCreateNestedManyWithoutYearInput = {
    create?: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput> | DetainCreateWithoutYearInput[] | DetainUncheckedCreateWithoutYearInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutYearInput | DetainCreateOrConnectWithoutYearInput[]
    createMany?: DetainCreateManyYearInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput> | SubjectCreateWithoutYearInput[] | SubjectUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutYearInput | SubjectCreateOrConnectWithoutYearInput[]
    createMany?: SubjectCreateManyYearInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectFacultyUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput> | SubjectFacultyCreateWithoutYearInput[] | SubjectFacultyUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutYearInput | SubjectFacultyCreateOrConnectWithoutYearInput[]
    createMany?: SubjectFacultyCreateManyYearInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput> | ExamCreateWithoutYearInput[] | ExamUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutYearInput | ExamCreateOrConnectWithoutYearInput[]
    createMany?: ExamCreateManyYearInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput> | MarksCreateWithoutYearInput[] | MarksUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutYearInput | MarksCreateOrConnectWithoutYearInput[]
    createMany?: MarksCreateManyYearInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type DetainUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput> | DetainCreateWithoutYearInput[] | DetainUncheckedCreateWithoutYearInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutYearInput | DetainCreateOrConnectWithoutYearInput[]
    createMany?: DetainCreateManyYearInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubjectUpdateManyWithoutYearNestedInput = {
    create?: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput> | SubjectCreateWithoutYearInput[] | SubjectUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutYearInput | SubjectCreateOrConnectWithoutYearInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutYearInput | SubjectUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: SubjectCreateManyYearInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutYearInput | SubjectUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutYearInput | SubjectUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectFacultyUpdateManyWithoutYearNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput> | SubjectFacultyCreateWithoutYearInput[] | SubjectFacultyUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutYearInput | SubjectFacultyCreateOrConnectWithoutYearInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutYearInput | SubjectFacultyUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: SubjectFacultyCreateManyYearInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutYearInput | SubjectFacultyUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutYearInput | SubjectFacultyUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutYearNestedInput = {
    create?: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput> | ExamCreateWithoutYearInput[] | ExamUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutYearInput | ExamCreateOrConnectWithoutYearInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutYearInput | ExamUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: ExamCreateManyYearInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutYearInput | ExamUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutYearInput | ExamUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutYearNestedInput = {
    create?: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput> | MarksCreateWithoutYearInput[] | MarksUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutYearInput | MarksCreateOrConnectWithoutYearInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutYearInput | MarksUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: MarksCreateManyYearInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutYearInput | MarksUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutYearInput | MarksUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type DetainUpdateManyWithoutYearNestedInput = {
    create?: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput> | DetainCreateWithoutYearInput[] | DetainUncheckedCreateWithoutYearInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutYearInput | DetainCreateOrConnectWithoutYearInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutYearInput | DetainUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: DetainCreateManyYearInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutYearInput | DetainUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutYearInput | DetainUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubjectUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput> | SubjectCreateWithoutYearInput[] | SubjectUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutYearInput | SubjectCreateOrConnectWithoutYearInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutYearInput | SubjectUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: SubjectCreateManyYearInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutYearInput | SubjectUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutYearInput | SubjectUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput> | SubjectFacultyCreateWithoutYearInput[] | SubjectFacultyUncheckedCreateWithoutYearInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutYearInput | SubjectFacultyCreateOrConnectWithoutYearInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutYearInput | SubjectFacultyUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: SubjectFacultyCreateManyYearInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutYearInput | SubjectFacultyUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutYearInput | SubjectFacultyUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput> | ExamCreateWithoutYearInput[] | ExamUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutYearInput | ExamCreateOrConnectWithoutYearInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutYearInput | ExamUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: ExamCreateManyYearInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutYearInput | ExamUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutYearInput | ExamUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput> | MarksCreateWithoutYearInput[] | MarksUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutYearInput | MarksCreateOrConnectWithoutYearInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutYearInput | MarksUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: MarksCreateManyYearInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutYearInput | MarksUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutYearInput | MarksUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type DetainUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput> | DetainCreateWithoutYearInput[] | DetainUncheckedCreateWithoutYearInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutYearInput | DetainCreateOrConnectWithoutYearInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutYearInput | DetainUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: DetainCreateManyYearInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutYearInput | DetainUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutYearInput | DetainUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type SubjectCreateNestedManyWithoutSubjectCoordinatorInput = {
    create?: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput> | SubjectCreateWithoutSubjectCoordinatorInput[] | SubjectUncheckedCreateWithoutSubjectCoordinatorInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectCoordinatorInput | SubjectCreateOrConnectWithoutSubjectCoordinatorInput[]
    createMany?: SubjectCreateManySubjectCoordinatorInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectFacultyCreateNestedManyWithoutFacultyInput = {
    create?: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput> | SubjectFacultyCreateWithoutFacultyInput[] | SubjectFacultyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutFacultyInput | SubjectFacultyCreateOrConnectWithoutFacultyInput[]
    createMany?: SubjectFacultyCreateManyFacultyInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutFacultyInput = {
    create?: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput> | ExamCreateWithoutFacultyInput[] | ExamUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutFacultyInput | ExamCreateOrConnectWithoutFacultyInput[]
    createMany?: ExamCreateManyFacultyInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutSubjectCoordinatorInput = {
    create?: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput> | SubjectCreateWithoutSubjectCoordinatorInput[] | SubjectUncheckedCreateWithoutSubjectCoordinatorInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectCoordinatorInput | SubjectCreateOrConnectWithoutSubjectCoordinatorInput[]
    createMany?: SubjectCreateManySubjectCoordinatorInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectFacultyUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput> | SubjectFacultyCreateWithoutFacultyInput[] | SubjectFacultyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutFacultyInput | SubjectFacultyCreateOrConnectWithoutFacultyInput[]
    createMany?: SubjectFacultyCreateManyFacultyInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput> | ExamCreateWithoutFacultyInput[] | ExamUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutFacultyInput | ExamCreateOrConnectWithoutFacultyInput[]
    createMany?: ExamCreateManyFacultyInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type SubjectUpdateManyWithoutSubjectCoordinatorNestedInput = {
    create?: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput> | SubjectCreateWithoutSubjectCoordinatorInput[] | SubjectUncheckedCreateWithoutSubjectCoordinatorInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectCoordinatorInput | SubjectCreateOrConnectWithoutSubjectCoordinatorInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutSubjectCoordinatorInput | SubjectUpsertWithWhereUniqueWithoutSubjectCoordinatorInput[]
    createMany?: SubjectCreateManySubjectCoordinatorInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutSubjectCoordinatorInput | SubjectUpdateWithWhereUniqueWithoutSubjectCoordinatorInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutSubjectCoordinatorInput | SubjectUpdateManyWithWhereWithoutSubjectCoordinatorInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectFacultyUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput> | SubjectFacultyCreateWithoutFacultyInput[] | SubjectFacultyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutFacultyInput | SubjectFacultyCreateOrConnectWithoutFacultyInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutFacultyInput | SubjectFacultyUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: SubjectFacultyCreateManyFacultyInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutFacultyInput | SubjectFacultyUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutFacultyInput | SubjectFacultyUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput> | ExamCreateWithoutFacultyInput[] | ExamUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutFacultyInput | ExamCreateOrConnectWithoutFacultyInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutFacultyInput | ExamUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: ExamCreateManyFacultyInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutFacultyInput | ExamUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutFacultyInput | ExamUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutSubjectCoordinatorNestedInput = {
    create?: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput> | SubjectCreateWithoutSubjectCoordinatorInput[] | SubjectUncheckedCreateWithoutSubjectCoordinatorInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectCoordinatorInput | SubjectCreateOrConnectWithoutSubjectCoordinatorInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutSubjectCoordinatorInput | SubjectUpsertWithWhereUniqueWithoutSubjectCoordinatorInput[]
    createMany?: SubjectCreateManySubjectCoordinatorInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutSubjectCoordinatorInput | SubjectUpdateWithWhereUniqueWithoutSubjectCoordinatorInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutSubjectCoordinatorInput | SubjectUpdateManyWithWhereWithoutSubjectCoordinatorInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput> | SubjectFacultyCreateWithoutFacultyInput[] | SubjectFacultyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutFacultyInput | SubjectFacultyCreateOrConnectWithoutFacultyInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutFacultyInput | SubjectFacultyUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: SubjectFacultyCreateManyFacultyInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutFacultyInput | SubjectFacultyUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutFacultyInput | SubjectFacultyUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput> | ExamCreateWithoutFacultyInput[] | ExamUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutFacultyInput | ExamCreateOrConnectWithoutFacultyInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutFacultyInput | ExamUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: ExamCreateManyFacultyInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutFacultyInput | ExamUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutFacultyInput | ExamUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubjectCoordinatorInput = {
    create?: XOR<UserCreateWithoutSubjectCoordinatorInput, UserUncheckedCreateWithoutSubjectCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectCoordinatorInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput> | StudentCreateWithoutSubjectsInput[] | StudentUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput | StudentCreateOrConnectWithoutSubjectsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectFacultyCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput> | SubjectFacultyCreateWithoutSubjectInput[] | SubjectFacultyUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutSubjectInput | SubjectFacultyCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectFacultyCreateManySubjectInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type YearCreateNestedOneWithoutSubjectInput = {
    create?: XOR<YearCreateWithoutSubjectInput, YearUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: YearCreateOrConnectWithoutSubjectInput
    connect?: YearWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput> | StudentCreateWithoutSubjectsInput[] | StudentUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput | StudentCreateOrConnectWithoutSubjectsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput> | SubjectFacultyCreateWithoutSubjectInput[] | SubjectFacultyUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutSubjectInput | SubjectFacultyCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectFacultyCreateManySubjectInputEnvelope
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type EnumSubjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubjectType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput = {
    create?: XOR<UserCreateWithoutSubjectCoordinatorInput, UserUncheckedCreateWithoutSubjectCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectCoordinatorInput
    upsert?: UserUpsertWithoutSubjectCoordinatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectCoordinatorInput, UserUpdateWithoutSubjectCoordinatorInput>, UserUncheckedUpdateWithoutSubjectCoordinatorInput>
  }

  export type StudentUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput> | StudentCreateWithoutSubjectsInput[] | StudentUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput | StudentCreateOrConnectWithoutSubjectsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSubjectsInput | StudentUpsertWithWhereUniqueWithoutSubjectsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSubjectsInput | StudentUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSubjectsInput | StudentUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectFacultyUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput> | SubjectFacultyCreateWithoutSubjectInput[] | SubjectFacultyUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutSubjectInput | SubjectFacultyCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutSubjectInput | SubjectFacultyUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectFacultyCreateManySubjectInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutSubjectInput | SubjectFacultyUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutSubjectInput | SubjectFacultyUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutSubjectInput | ExamUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutSubjectInput | ExamUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutSubjectInput | ExamUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type YearUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<YearCreateWithoutSubjectInput, YearUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: YearCreateOrConnectWithoutSubjectInput
    upsert?: YearUpsertWithoutSubjectInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutSubjectInput, YearUpdateWithoutSubjectInput>, YearUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput> | StudentCreateWithoutSubjectsInput[] | StudentUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput | StudentCreateOrConnectWithoutSubjectsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSubjectsInput | StudentUpsertWithWhereUniqueWithoutSubjectsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSubjectsInput | StudentUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSubjectsInput | StudentUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput> | SubjectFacultyCreateWithoutSubjectInput[] | SubjectFacultyUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectFacultyCreateOrConnectWithoutSubjectInput | SubjectFacultyCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectFacultyUpsertWithWhereUniqueWithoutSubjectInput | SubjectFacultyUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectFacultyCreateManySubjectInputEnvelope
    set?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    disconnect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    delete?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    connect?: SubjectFacultyWhereUniqueInput | SubjectFacultyWhereUniqueInput[]
    update?: SubjectFacultyUpdateWithWhereUniqueWithoutSubjectInput | SubjectFacultyUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectFacultyUpdateManyWithWhereWithoutSubjectInput | SubjectFacultyUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutSubjectInput | ExamUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutSubjectInput | ExamUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutSubjectInput | ExamUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubjectFacultyInput = {
    create?: XOR<UserCreateWithoutSubjectFacultyInput, UserUncheckedCreateWithoutSubjectFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectFacultyInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutFacultiesInput = {
    create?: XOR<SubjectCreateWithoutFacultiesInput, SubjectUncheckedCreateWithoutFacultiesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutFacultiesInput
    connect?: SubjectWhereUniqueInput
  }

  export type YearCreateNestedOneWithoutSubjectFacultyInput = {
    create?: XOR<YearCreateWithoutSubjectFacultyInput, YearUncheckedCreateWithoutSubjectFacultyInput>
    connectOrCreate?: YearCreateOrConnectWithoutSubjectFacultyInput
    connect?: YearWhereUniqueInput
  }

  export type EnumSubjectFacultyRoleFieldUpdateOperationsInput = {
    set?: $Enums.SubjectFacultyRole
  }

  export type UserUpdateOneRequiredWithoutSubjectFacultyNestedInput = {
    create?: XOR<UserCreateWithoutSubjectFacultyInput, UserUncheckedCreateWithoutSubjectFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectFacultyInput
    upsert?: UserUpsertWithoutSubjectFacultyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectFacultyInput, UserUpdateWithoutSubjectFacultyInput>, UserUncheckedUpdateWithoutSubjectFacultyInput>
  }

  export type SubjectUpdateOneRequiredWithoutFacultiesNestedInput = {
    create?: XOR<SubjectCreateWithoutFacultiesInput, SubjectUncheckedCreateWithoutFacultiesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutFacultiesInput
    upsert?: SubjectUpsertWithoutFacultiesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutFacultiesInput, SubjectUpdateWithoutFacultiesInput>, SubjectUncheckedUpdateWithoutFacultiesInput>
  }

  export type YearUpdateOneRequiredWithoutSubjectFacultyNestedInput = {
    create?: XOR<YearCreateWithoutSubjectFacultyInput, YearUncheckedCreateWithoutSubjectFacultyInput>
    connectOrCreate?: YearCreateOrConnectWithoutSubjectFacultyInput
    upsert?: YearUpsertWithoutSubjectFacultyInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutSubjectFacultyInput, YearUpdateWithoutSubjectFacultyInput>, YearUncheckedUpdateWithoutSubjectFacultyInput>
  }

  export type SubjectCreateNestedManyWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutEligibleStudentsInput = {
    create?: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput> | ExamCreateWithoutEligibleStudentsInput[] | ExamUncheckedCreateWithoutEligibleStudentsInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutEligibleStudentsInput | ExamCreateOrConnectWithoutEligibleStudentsInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput> | MarksCreateWithoutStudentInput[] | MarksUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutStudentInput | MarksCreateOrConnectWithoutStudentInput[]
    createMany?: MarksCreateManyStudentInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type DetainCreateNestedManyWithoutStudentInput = {
    create?: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput> | DetainCreateWithoutStudentInput[] | DetainUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutStudentInput | DetainCreateOrConnectWithoutStudentInput[]
    createMany?: DetainCreateManyStudentInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutEligibleStudentsInput = {
    create?: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput> | ExamCreateWithoutEligibleStudentsInput[] | ExamUncheckedCreateWithoutEligibleStudentsInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutEligibleStudentsInput | ExamCreateOrConnectWithoutEligibleStudentsInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput> | MarksCreateWithoutStudentInput[] | MarksUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutStudentInput | MarksCreateOrConnectWithoutStudentInput[]
    createMany?: MarksCreateManyStudentInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type DetainUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput> | DetainCreateWithoutStudentInput[] | DetainUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutStudentInput | DetainCreateOrConnectWithoutStudentInput[]
    createMany?: DetainCreateManyStudentInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type SubjectUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutStudentsInput | SubjectUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutStudentsInput | SubjectUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutStudentsInput | SubjectUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutEligibleStudentsNestedInput = {
    create?: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput> | ExamCreateWithoutEligibleStudentsInput[] | ExamUncheckedCreateWithoutEligibleStudentsInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutEligibleStudentsInput | ExamCreateOrConnectWithoutEligibleStudentsInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutEligibleStudentsInput | ExamUpsertWithWhereUniqueWithoutEligibleStudentsInput[]
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutEligibleStudentsInput | ExamUpdateWithWhereUniqueWithoutEligibleStudentsInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutEligibleStudentsInput | ExamUpdateManyWithWhereWithoutEligibleStudentsInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput> | MarksCreateWithoutStudentInput[] | MarksUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutStudentInput | MarksCreateOrConnectWithoutStudentInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutStudentInput | MarksUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarksCreateManyStudentInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutStudentInput | MarksUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutStudentInput | MarksUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type DetainUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput> | DetainCreateWithoutStudentInput[] | DetainUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutStudentInput | DetainCreateOrConnectWithoutStudentInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutStudentInput | DetainUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DetainCreateManyStudentInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutStudentInput | DetainUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutStudentInput | DetainUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutStudentsInput | SubjectUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutStudentsInput | SubjectUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutStudentsInput | SubjectUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutEligibleStudentsNestedInput = {
    create?: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput> | ExamCreateWithoutEligibleStudentsInput[] | ExamUncheckedCreateWithoutEligibleStudentsInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutEligibleStudentsInput | ExamCreateOrConnectWithoutEligibleStudentsInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutEligibleStudentsInput | ExamUpsertWithWhereUniqueWithoutEligibleStudentsInput[]
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutEligibleStudentsInput | ExamUpdateWithWhereUniqueWithoutEligibleStudentsInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutEligibleStudentsInput | ExamUpdateManyWithWhereWithoutEligibleStudentsInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput> | MarksCreateWithoutStudentInput[] | MarksUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutStudentInput | MarksCreateOrConnectWithoutStudentInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutStudentInput | MarksUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarksCreateManyStudentInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutStudentInput | MarksUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutStudentInput | MarksUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type DetainUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput> | DetainCreateWithoutStudentInput[] | DetainUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutStudentInput | DetainCreateOrConnectWithoutStudentInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutStudentInput | DetainUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DetainCreateManyStudentInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutStudentInput | DetainUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutStudentInput | DetainUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutExamInput = {
    create?: XOR<SubjectCreateWithoutExamInput, SubjectUncheckedCreateWithoutExamInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutExamInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExamInput = {
    create?: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutExamsInput = {
    create?: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput> | StudentCreateWithoutExamsInput[] | StudentUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | StudentCreateOrConnectWithoutExamsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type MarksCreateNestedOneWithoutExamInput = {
    create?: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
    connectOrCreate?: MarksCreateOrConnectWithoutExamInput
    connect?: MarksWhereUniqueInput
  }

  export type DetainCreateNestedManyWithoutExamInput = {
    create?: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput> | DetainCreateWithoutExamInput[] | DetainUncheckedCreateWithoutExamInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutExamInput | DetainCreateOrConnectWithoutExamInput[]
    createMany?: DetainCreateManyExamInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type YearCreateNestedOneWithoutExamInput = {
    create?: XOR<YearCreateWithoutExamInput, YearUncheckedCreateWithoutExamInput>
    connectOrCreate?: YearCreateOrConnectWithoutExamInput
    connect?: YearWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedManyWithoutExamsInput = {
    create?: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput> | StudentCreateWithoutExamsInput[] | StudentUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | StudentCreateOrConnectWithoutExamsInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedOneWithoutExamInput = {
    create?: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
    connectOrCreate?: MarksCreateOrConnectWithoutExamInput
    connect?: MarksWhereUniqueInput
  }

  export type DetainUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput> | DetainCreateWithoutExamInput[] | DetainUncheckedCreateWithoutExamInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutExamInput | DetainCreateOrConnectWithoutExamInput[]
    createMany?: DetainCreateManyExamInputEnvelope
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumExamStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExamStatus | null
  }

  export type SubjectUpdateOneRequiredWithoutExamNestedInput = {
    create?: XOR<SubjectCreateWithoutExamInput, SubjectUncheckedCreateWithoutExamInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutExamInput
    upsert?: SubjectUpsertWithoutExamInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutExamInput, SubjectUpdateWithoutExamInput>, SubjectUncheckedUpdateWithoutExamInput>
  }

  export type UserUpdateOneRequiredWithoutExamNestedInput = {
    create?: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamInput
    upsert?: UserUpsertWithoutExamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamInput, UserUpdateWithoutExamInput>, UserUncheckedUpdateWithoutExamInput>
  }

  export type StudentUpdateManyWithoutExamsNestedInput = {
    create?: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput> | StudentCreateWithoutExamsInput[] | StudentUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | StudentCreateOrConnectWithoutExamsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutExamsInput | StudentUpsertWithWhereUniqueWithoutExamsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutExamsInput | StudentUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutExamsInput | StudentUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type MarksUpdateOneWithoutExamNestedInput = {
    create?: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
    connectOrCreate?: MarksCreateOrConnectWithoutExamInput
    upsert?: MarksUpsertWithoutExamInput
    disconnect?: MarksWhereInput | boolean
    delete?: MarksWhereInput | boolean
    connect?: MarksWhereUniqueInput
    update?: XOR<XOR<MarksUpdateToOneWithWhereWithoutExamInput, MarksUpdateWithoutExamInput>, MarksUncheckedUpdateWithoutExamInput>
  }

  export type DetainUpdateManyWithoutExamNestedInput = {
    create?: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput> | DetainCreateWithoutExamInput[] | DetainUncheckedCreateWithoutExamInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutExamInput | DetainCreateOrConnectWithoutExamInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutExamInput | DetainUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: DetainCreateManyExamInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutExamInput | DetainUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutExamInput | DetainUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type YearUpdateOneRequiredWithoutExamNestedInput = {
    create?: XOR<YearCreateWithoutExamInput, YearUncheckedCreateWithoutExamInput>
    connectOrCreate?: YearCreateOrConnectWithoutExamInput
    upsert?: YearUpsertWithoutExamInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutExamInput, YearUpdateWithoutExamInput>, YearUncheckedUpdateWithoutExamInput>
  }

  export type StudentUncheckedUpdateManyWithoutExamsNestedInput = {
    create?: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput> | StudentCreateWithoutExamsInput[] | StudentUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | StudentCreateOrConnectWithoutExamsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutExamsInput | StudentUpsertWithWhereUniqueWithoutExamsInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutExamsInput | StudentUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutExamsInput | StudentUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type MarksUncheckedUpdateOneWithoutExamNestedInput = {
    create?: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
    connectOrCreate?: MarksCreateOrConnectWithoutExamInput
    upsert?: MarksUpsertWithoutExamInput
    disconnect?: MarksWhereInput | boolean
    delete?: MarksWhereInput | boolean
    connect?: MarksWhereUniqueInput
    update?: XOR<XOR<MarksUpdateToOneWithWhereWithoutExamInput, MarksUpdateWithoutExamInput>, MarksUncheckedUpdateWithoutExamInput>
  }

  export type DetainUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput> | DetainCreateWithoutExamInput[] | DetainUncheckedCreateWithoutExamInput[]
    connectOrCreate?: DetainCreateOrConnectWithoutExamInput | DetainCreateOrConnectWithoutExamInput[]
    upsert?: DetainUpsertWithWhereUniqueWithoutExamInput | DetainUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: DetainCreateManyExamInputEnvelope
    set?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    disconnect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    delete?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    connect?: DetainWhereUniqueInput | DetainWhereUniqueInput[]
    update?: DetainUpdateWithWhereUniqueWithoutExamInput | DetainUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: DetainUpdateManyWithWhereWithoutExamInput | DetainUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: DetainScalarWhereInput | DetainScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutMarksInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    connect?: StudentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutMarksInput = {
    create?: XOR<ExamCreateWithoutMarksInput, ExamUncheckedCreateWithoutMarksInput>
    connectOrCreate?: ExamCreateOrConnectWithoutMarksInput
    connect?: ExamWhereUniqueInput
  }

  export type YearCreateNestedOneWithoutMarksInput = {
    create?: XOR<YearCreateWithoutMarksInput, YearUncheckedCreateWithoutMarksInput>
    connectOrCreate?: YearCreateOrConnectWithoutMarksInput
    connect?: YearWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    upsert?: StudentUpsertWithoutMarksInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMarksInput, StudentUpdateWithoutMarksInput>, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type ExamUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<ExamCreateWithoutMarksInput, ExamUncheckedCreateWithoutMarksInput>
    connectOrCreate?: ExamCreateOrConnectWithoutMarksInput
    upsert?: ExamUpsertWithoutMarksInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutMarksInput, ExamUpdateWithoutMarksInput>, ExamUncheckedUpdateWithoutMarksInput>
  }

  export type YearUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<YearCreateWithoutMarksInput, YearUncheckedCreateWithoutMarksInput>
    connectOrCreate?: YearCreateOrConnectWithoutMarksInput
    upsert?: YearUpsertWithoutMarksInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutMarksInput, YearUpdateWithoutMarksInput>, YearUncheckedUpdateWithoutMarksInput>
  }

  export type StudentCreateNestedOneWithoutDetainInput = {
    create?: XOR<StudentCreateWithoutDetainInput, StudentUncheckedCreateWithoutDetainInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDetainInput
    connect?: StudentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutDetainInput = {
    create?: XOR<ExamCreateWithoutDetainInput, ExamUncheckedCreateWithoutDetainInput>
    connectOrCreate?: ExamCreateOrConnectWithoutDetainInput
    connect?: ExamWhereUniqueInput
  }

  export type YearCreateNestedOneWithoutDetainInput = {
    create?: XOR<YearCreateWithoutDetainInput, YearUncheckedCreateWithoutDetainInput>
    connectOrCreate?: YearCreateOrConnectWithoutDetainInput
    connect?: YearWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutDetainNestedInput = {
    create?: XOR<StudentCreateWithoutDetainInput, StudentUncheckedCreateWithoutDetainInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDetainInput
    upsert?: StudentUpsertWithoutDetainInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutDetainInput, StudentUpdateWithoutDetainInput>, StudentUncheckedUpdateWithoutDetainInput>
  }

  export type ExamUpdateOneRequiredWithoutDetainNestedInput = {
    create?: XOR<ExamCreateWithoutDetainInput, ExamUncheckedCreateWithoutDetainInput>
    connectOrCreate?: ExamCreateOrConnectWithoutDetainInput
    upsert?: ExamUpsertWithoutDetainInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutDetainInput, ExamUpdateWithoutDetainInput>, ExamUncheckedUpdateWithoutDetainInput>
  }

  export type YearUpdateOneRequiredWithoutDetainNestedInput = {
    create?: XOR<YearCreateWithoutDetainInput, YearUncheckedCreateWithoutDetainInput>
    connectOrCreate?: YearCreateOrConnectWithoutDetainInput
    upsert?: YearUpsertWithoutDetainInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutDetainInput, YearUpdateWithoutDetainInput>, YearUncheckedUpdateWithoutDetainInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumSubjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectType | EnumSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeFilter<$PrismaModel> | $Enums.SubjectType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectType | EnumSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectType[] | ListEnumSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectTypeFilter<$PrismaModel>
    _max?: NestedEnumSubjectTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubjectFacultyRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectFacultyRole | EnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel> | $Enums.SubjectFacultyRole
  }

  export type NestedEnumSubjectFacultyRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectFacultyRole | EnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectFacultyRole[] | ListEnumSubjectFacultyRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFacultyRoleWithAggregatesFilter<$PrismaModel> | $Enums.SubjectFacultyRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel>
    _max?: NestedEnumSubjectFacultyRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumExamStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamStatusNullableFilter<$PrismaModel> | $Enums.ExamStatus | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumExamStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExamStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumExamStatusNullableFilter<$PrismaModel>
  }

  export type SubjectCreateWithoutYearInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    subjectCoordinator: UserCreateNestedOneWithoutSubjectCoordinatorInput
    students?: StudentCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyCreateNestedManyWithoutSubjectInput
    exam?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutYearInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput
    exam?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutYearInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput>
  }

  export type SubjectCreateManyYearInputEnvelope = {
    data: SubjectCreateManyYearInput | SubjectCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type SubjectFacultyCreateWithoutYearInput = {
    id?: string
    role: $Enums.SubjectFacultyRole
    faculty: UserCreateNestedOneWithoutSubjectFacultyInput
    subject: SubjectCreateNestedOneWithoutFacultiesInput
  }

  export type SubjectFacultyUncheckedCreateWithoutYearInput = {
    id?: string
    facultyId: number
    subjectId: number
    role: $Enums.SubjectFacultyRole
  }

  export type SubjectFacultyCreateOrConnectWithoutYearInput = {
    where: SubjectFacultyWhereUniqueInput
    create: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput>
  }

  export type SubjectFacultyCreateManyYearInputEnvelope = {
    data: SubjectFacultyCreateManyYearInput | SubjectFacultyCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutYearInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    faculty: UserCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    marks?: MarksCreateNestedOneWithoutExamInput
    detain?: DetainCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutYearInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutYearInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput>
  }

  export type ExamCreateManyYearInputEnvelope = {
    data: ExamCreateManyYearInput | ExamCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type MarksCreateWithoutYearInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    student: StudentCreateNestedOneWithoutMarksInput
    exam: ExamCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutYearInput = {
    id?: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
  }

  export type MarksCreateOrConnectWithoutYearInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput>
  }

  export type MarksCreateManyYearInputEnvelope = {
    data: MarksCreateManyYearInput | MarksCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type DetainCreateWithoutYearInput = {
    student: StudentCreateNestedOneWithoutDetainInput
    exam: ExamCreateNestedOneWithoutDetainInput
  }

  export type DetainUncheckedCreateWithoutYearInput = {
    id?: number
    studentId: string
    examId: string
  }

  export type DetainCreateOrConnectWithoutYearInput = {
    where: DetainWhereUniqueInput
    create: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput>
  }

  export type DetainCreateManyYearInputEnvelope = {
    data: DetainCreateManyYearInput | DetainCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutYearInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutYearInput, SubjectUncheckedUpdateWithoutYearInput>
    create: XOR<SubjectCreateWithoutYearInput, SubjectUncheckedCreateWithoutYearInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutYearInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutYearInput, SubjectUncheckedUpdateWithoutYearInput>
  }

  export type SubjectUpdateManyWithWhereWithoutYearInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutYearInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
    coordinatorId?: IntFilter<"Subject"> | number
    type?: EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType
    dep_IT?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CE?: BoolNullableFilter<"Subject"> | boolean | null
    dep_CSE?: BoolNullableFilter<"Subject"> | boolean | null
    theory_hour?: IntNullableFilter<"Subject"> | number | null
    practical_hour?: IntNullableFilter<"Subject"> | number | null
    theory_credite?: IntNullableFilter<"Subject"> | number | null
    practical_credite?: IntNullableFilter<"Subject"> | number | null
    theory_int_marks?: IntNullableFilter<"Subject"> | number | null
    practical_int_marks?: IntNullableFilter<"Subject"> | number | null
    theory_ext_marks?: IntNullableFilter<"Subject"> | number | null
    practical_ext_marks?: IntNullableFilter<"Subject"> | number | null
    yearId?: IntFilter<"Subject"> | number
  }

  export type SubjectFacultyUpsertWithWhereUniqueWithoutYearInput = {
    where: SubjectFacultyWhereUniqueInput
    update: XOR<SubjectFacultyUpdateWithoutYearInput, SubjectFacultyUncheckedUpdateWithoutYearInput>
    create: XOR<SubjectFacultyCreateWithoutYearInput, SubjectFacultyUncheckedCreateWithoutYearInput>
  }

  export type SubjectFacultyUpdateWithWhereUniqueWithoutYearInput = {
    where: SubjectFacultyWhereUniqueInput
    data: XOR<SubjectFacultyUpdateWithoutYearInput, SubjectFacultyUncheckedUpdateWithoutYearInput>
  }

  export type SubjectFacultyUpdateManyWithWhereWithoutYearInput = {
    where: SubjectFacultyScalarWhereInput
    data: XOR<SubjectFacultyUpdateManyMutationInput, SubjectFacultyUncheckedUpdateManyWithoutYearInput>
  }

  export type SubjectFacultyScalarWhereInput = {
    AND?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
    OR?: SubjectFacultyScalarWhereInput[]
    NOT?: SubjectFacultyScalarWhereInput | SubjectFacultyScalarWhereInput[]
    id?: StringFilter<"SubjectFaculty"> | string
    facultyId?: IntFilter<"SubjectFaculty"> | number
    subjectId?: IntFilter<"SubjectFaculty"> | number
    role?: EnumSubjectFacultyRoleFilter<"SubjectFaculty"> | $Enums.SubjectFacultyRole
    yearId?: IntFilter<"SubjectFaculty"> | number
  }

  export type ExamUpsertWithWhereUniqueWithoutYearInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutYearInput, ExamUncheckedUpdateWithoutYearInput>
    create: XOR<ExamCreateWithoutYearInput, ExamUncheckedCreateWithoutYearInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutYearInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutYearInput, ExamUncheckedUpdateWithoutYearInput>
  }

  export type ExamUpdateManyWithWhereWithoutYearInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutYearInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    name?: StringFilter<"Exam"> | string
    date?: DateTimeNullableFilter<"Exam"> | Date | string | null
    subjectId?: IntFilter<"Exam"> | number
    facultyId?: IntFilter<"Exam"> | number
    totalMarks?: IntNullableFilter<"Exam"> | number | null
    effectiveMarks?: IntNullableFilter<"Exam"> | number | null
    class1?: BoolNullableFilter<"Exam"> | boolean | null
    class2?: BoolNullableFilter<"Exam"> | boolean | null
    status?: EnumExamStatusNullableFilter<"Exam"> | $Enums.ExamStatus | null
    yearId?: IntFilter<"Exam"> | number
  }

  export type MarksUpsertWithWhereUniqueWithoutYearInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutYearInput, MarksUncheckedUpdateWithoutYearInput>
    create: XOR<MarksCreateWithoutYearInput, MarksUncheckedCreateWithoutYearInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutYearInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutYearInput, MarksUncheckedUpdateWithoutYearInput>
  }

  export type MarksUpdateManyWithWhereWithoutYearInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutYearInput>
  }

  export type MarksScalarWhereInput = {
    AND?: MarksScalarWhereInput | MarksScalarWhereInput[]
    OR?: MarksScalarWhereInput[]
    NOT?: MarksScalarWhereInput | MarksScalarWhereInput[]
    id?: StringFilter<"Marks"> | string
    studentId?: StringFilter<"Marks"> | string
    earnedMarks?: IntFilter<"Marks"> | number
    effectiveMarks?: IntFilter<"Marks"> | number
    examId?: StringFilter<"Marks"> | string
    yearId?: IntFilter<"Marks"> | number
  }

  export type DetainUpsertWithWhereUniqueWithoutYearInput = {
    where: DetainWhereUniqueInput
    update: XOR<DetainUpdateWithoutYearInput, DetainUncheckedUpdateWithoutYearInput>
    create: XOR<DetainCreateWithoutYearInput, DetainUncheckedCreateWithoutYearInput>
  }

  export type DetainUpdateWithWhereUniqueWithoutYearInput = {
    where: DetainWhereUniqueInput
    data: XOR<DetainUpdateWithoutYearInput, DetainUncheckedUpdateWithoutYearInput>
  }

  export type DetainUpdateManyWithWhereWithoutYearInput = {
    where: DetainScalarWhereInput
    data: XOR<DetainUpdateManyMutationInput, DetainUncheckedUpdateManyWithoutYearInput>
  }

  export type DetainScalarWhereInput = {
    AND?: DetainScalarWhereInput | DetainScalarWhereInput[]
    OR?: DetainScalarWhereInput[]
    NOT?: DetainScalarWhereInput | DetainScalarWhereInput[]
    id?: IntFilter<"Detain"> | number
    studentId?: StringFilter<"Detain"> | string
    examId?: StringFilter<"Detain"> | string
    yearId?: IntFilter<"Detain"> | number
  }

  export type SubjectCreateWithoutSubjectCoordinatorInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    students?: StudentCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyCreateNestedManyWithoutSubjectInput
    exam?: ExamCreateNestedManyWithoutSubjectInput
    year: YearCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSubjectCoordinatorInput = {
    id?: number
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
    students?: StudentUncheckedCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput
    exam?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutSubjectCoordinatorInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput>
  }

  export type SubjectCreateManySubjectCoordinatorInputEnvelope = {
    data: SubjectCreateManySubjectCoordinatorInput | SubjectCreateManySubjectCoordinatorInput[]
    skipDuplicates?: boolean
  }

  export type SubjectFacultyCreateWithoutFacultyInput = {
    id?: string
    role: $Enums.SubjectFacultyRole
    subject: SubjectCreateNestedOneWithoutFacultiesInput
    year: YearCreateNestedOneWithoutSubjectFacultyInput
  }

  export type SubjectFacultyUncheckedCreateWithoutFacultyInput = {
    id?: string
    subjectId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type SubjectFacultyCreateOrConnectWithoutFacultyInput = {
    where: SubjectFacultyWhereUniqueInput
    create: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput>
  }

  export type SubjectFacultyCreateManyFacultyInputEnvelope = {
    data: SubjectFacultyCreateManyFacultyInput | SubjectFacultyCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutFacultyInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    marks?: MarksCreateNestedOneWithoutExamInput
    detain?: DetainCreateNestedManyWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutFacultyInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutFacultyInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput>
  }

  export type ExamCreateManyFacultyInputEnvelope = {
    data: ExamCreateManyFacultyInput | ExamCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutSubjectCoordinatorInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutSubjectCoordinatorInput, SubjectUncheckedUpdateWithoutSubjectCoordinatorInput>
    create: XOR<SubjectCreateWithoutSubjectCoordinatorInput, SubjectUncheckedCreateWithoutSubjectCoordinatorInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutSubjectCoordinatorInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutSubjectCoordinatorInput, SubjectUncheckedUpdateWithoutSubjectCoordinatorInput>
  }

  export type SubjectUpdateManyWithWhereWithoutSubjectCoordinatorInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutSubjectCoordinatorInput>
  }

  export type SubjectFacultyUpsertWithWhereUniqueWithoutFacultyInput = {
    where: SubjectFacultyWhereUniqueInput
    update: XOR<SubjectFacultyUpdateWithoutFacultyInput, SubjectFacultyUncheckedUpdateWithoutFacultyInput>
    create: XOR<SubjectFacultyCreateWithoutFacultyInput, SubjectFacultyUncheckedCreateWithoutFacultyInput>
  }

  export type SubjectFacultyUpdateWithWhereUniqueWithoutFacultyInput = {
    where: SubjectFacultyWhereUniqueInput
    data: XOR<SubjectFacultyUpdateWithoutFacultyInput, SubjectFacultyUncheckedUpdateWithoutFacultyInput>
  }

  export type SubjectFacultyUpdateManyWithWhereWithoutFacultyInput = {
    where: SubjectFacultyScalarWhereInput
    data: XOR<SubjectFacultyUpdateManyMutationInput, SubjectFacultyUncheckedUpdateManyWithoutFacultyInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutFacultyInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutFacultyInput, ExamUncheckedUpdateWithoutFacultyInput>
    create: XOR<ExamCreateWithoutFacultyInput, ExamUncheckedCreateWithoutFacultyInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutFacultyInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutFacultyInput, ExamUncheckedUpdateWithoutFacultyInput>
  }

  export type ExamUpdateManyWithWhereWithoutFacultyInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutFacultyInput>
  }

  export type UserCreateWithoutSubjectCoordinatorInput = {
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutFacultyInput
    exam?: ExamCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutSubjectCoordinatorInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutFacultyInput
    exam?: ExamUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutSubjectCoordinatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectCoordinatorInput, UserUncheckedCreateWithoutSubjectCoordinatorInput>
  }

  export type StudentCreateWithoutSubjectsInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    exams?: ExamCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksCreateNestedManyWithoutStudentInput
    detain?: DetainCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectsInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    exams?: ExamUncheckedCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksUncheckedCreateNestedManyWithoutStudentInput
    detain?: DetainUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectFacultyCreateWithoutSubjectInput = {
    id?: string
    role: $Enums.SubjectFacultyRole
    faculty: UserCreateNestedOneWithoutSubjectFacultyInput
    year: YearCreateNestedOneWithoutSubjectFacultyInput
  }

  export type SubjectFacultyUncheckedCreateWithoutSubjectInput = {
    id?: string
    facultyId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type SubjectFacultyCreateOrConnectWithoutSubjectInput = {
    where: SubjectFacultyWhereUniqueInput
    create: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectFacultyCreateManySubjectInputEnvelope = {
    data: SubjectFacultyCreateManySubjectInput | SubjectFacultyCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutSubjectInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    faculty: UserCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    marks?: MarksCreateNestedOneWithoutExamInput
    detain?: DetainCreateNestedManyWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutSubjectInput = {
    id?: string
    name: string
    date?: Date | string | null
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput>
  }

  export type ExamCreateManySubjectInputEnvelope = {
    data: ExamCreateManySubjectInput | ExamCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type YearCreateWithoutSubjectInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutYearInput
    exam?: ExamCreateNestedManyWithoutYearInput
    marks?: MarksCreateNestedManyWithoutYearInput
    detain?: DetainCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutSubjectInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutYearInput
    exam?: ExamUncheckedCreateNestedManyWithoutYearInput
    marks?: MarksUncheckedCreateNestedManyWithoutYearInput
    detain?: DetainUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutSubjectInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutSubjectInput, YearUncheckedCreateWithoutSubjectInput>
  }

  export type UserUpsertWithoutSubjectCoordinatorInput = {
    update: XOR<UserUpdateWithoutSubjectCoordinatorInput, UserUncheckedUpdateWithoutSubjectCoordinatorInput>
    create: XOR<UserCreateWithoutSubjectCoordinatorInput, UserUncheckedCreateWithoutSubjectCoordinatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectCoordinatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectCoordinatorInput, UserUncheckedUpdateWithoutSubjectCoordinatorInput>
  }

  export type UserUpdateWithoutSubjectCoordinatorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectFaculty?: SubjectFacultyUpdateManyWithoutFacultyNestedInput
    exam?: ExamUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutSubjectCoordinatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutFacultyNestedInput
    exam?: ExamUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentUpdateManyWithWhereWithoutSubjectsInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    studentId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    department?: EnumDepartmentFilter<"Student"> | $Enums.Department
    semester?: IntFilter<"Student"> | number
    class?: StringFilter<"Student"> | string
  }

  export type SubjectFacultyUpsertWithWhereUniqueWithoutSubjectInput = {
    where: SubjectFacultyWhereUniqueInput
    update: XOR<SubjectFacultyUpdateWithoutSubjectInput, SubjectFacultyUncheckedUpdateWithoutSubjectInput>
    create: XOR<SubjectFacultyCreateWithoutSubjectInput, SubjectFacultyUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectFacultyUpdateWithWhereUniqueWithoutSubjectInput = {
    where: SubjectFacultyWhereUniqueInput
    data: XOR<SubjectFacultyUpdateWithoutSubjectInput, SubjectFacultyUncheckedUpdateWithoutSubjectInput>
  }

  export type SubjectFacultyUpdateManyWithWhereWithoutSubjectInput = {
    where: SubjectFacultyScalarWhereInput
    data: XOR<SubjectFacultyUpdateManyMutationInput, SubjectFacultyUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutSubjectInput, ExamUncheckedUpdateWithoutSubjectInput>
    create: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutSubjectInput, ExamUncheckedUpdateWithoutSubjectInput>
  }

  export type ExamUpdateManyWithWhereWithoutSubjectInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutSubjectInput>
  }

  export type YearUpsertWithoutSubjectInput = {
    update: XOR<YearUpdateWithoutSubjectInput, YearUncheckedUpdateWithoutSubjectInput>
    create: XOR<YearCreateWithoutSubjectInput, YearUncheckedCreateWithoutSubjectInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutSubjectInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutSubjectInput, YearUncheckedUpdateWithoutSubjectInput>
  }

  export type YearUpdateWithoutSubjectInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectFaculty?: SubjectFacultyUpdateManyWithoutYearNestedInput
    exam?: ExamUpdateManyWithoutYearNestedInput
    marks?: MarksUpdateManyWithoutYearNestedInput
    detain?: DetainUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput
    exam?: ExamUncheckedUpdateManyWithoutYearNestedInput
    marks?: MarksUncheckedUpdateManyWithoutYearNestedInput
    detain?: DetainUncheckedUpdateManyWithoutYearNestedInput
  }

  export type UserCreateWithoutSubjectFacultyInput = {
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectCreateNestedManyWithoutSubjectCoordinatorInput
    exam?: ExamCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutSubjectFacultyInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedCreateNestedManyWithoutSubjectCoordinatorInput
    exam?: ExamUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutSubjectFacultyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectFacultyInput, UserUncheckedCreateWithoutSubjectFacultyInput>
  }

  export type SubjectCreateWithoutFacultiesInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    subjectCoordinator: UserCreateNestedOneWithoutSubjectCoordinatorInput
    students?: StudentCreateNestedManyWithoutSubjectsInput
    exam?: ExamCreateNestedManyWithoutSubjectInput
    year: YearCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutFacultiesInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
    students?: StudentUncheckedCreateNestedManyWithoutSubjectsInput
    exam?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutFacultiesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutFacultiesInput, SubjectUncheckedCreateWithoutFacultiesInput>
  }

  export type YearCreateWithoutSubjectFacultyInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectCreateNestedManyWithoutYearInput
    exam?: ExamCreateNestedManyWithoutYearInput
    marks?: MarksCreateNestedManyWithoutYearInput
    detain?: DetainCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutSubjectFacultyInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectUncheckedCreateNestedManyWithoutYearInput
    exam?: ExamUncheckedCreateNestedManyWithoutYearInput
    marks?: MarksUncheckedCreateNestedManyWithoutYearInput
    detain?: DetainUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutSubjectFacultyInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutSubjectFacultyInput, YearUncheckedCreateWithoutSubjectFacultyInput>
  }

  export type UserUpsertWithoutSubjectFacultyInput = {
    update: XOR<UserUpdateWithoutSubjectFacultyInput, UserUncheckedUpdateWithoutSubjectFacultyInput>
    create: XOR<UserCreateWithoutSubjectFacultyInput, UserUncheckedCreateWithoutSubjectFacultyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectFacultyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectFacultyInput, UserUncheckedUpdateWithoutSubjectFacultyInput>
  }

  export type UserUpdateWithoutSubjectFacultyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUpdateManyWithoutSubjectCoordinatorNestedInput
    exam?: ExamUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutSubjectFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedUpdateManyWithoutSubjectCoordinatorNestedInput
    exam?: ExamUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type SubjectUpsertWithoutFacultiesInput = {
    update: XOR<SubjectUpdateWithoutFacultiesInput, SubjectUncheckedUpdateWithoutFacultiesInput>
    create: XOR<SubjectCreateWithoutFacultiesInput, SubjectUncheckedCreateWithoutFacultiesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutFacultiesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutFacultiesInput, SubjectUncheckedUpdateWithoutFacultiesInput>
  }

  export type SubjectUpdateWithoutFacultiesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    subjectCoordinator?: UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput
    students?: StudentUpdateManyWithoutSubjectsNestedInput
    exam?: ExamUpdateManyWithoutSubjectNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutFacultiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutSubjectsNestedInput
    exam?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type YearUpsertWithoutSubjectFacultyInput = {
    update: XOR<YearUpdateWithoutSubjectFacultyInput, YearUncheckedUpdateWithoutSubjectFacultyInput>
    create: XOR<YearCreateWithoutSubjectFacultyInput, YearUncheckedCreateWithoutSubjectFacultyInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutSubjectFacultyInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutSubjectFacultyInput, YearUncheckedUpdateWithoutSubjectFacultyInput>
  }

  export type YearUpdateWithoutSubjectFacultyInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateManyWithoutYearNestedInput
    exam?: ExamUpdateManyWithoutYearNestedInput
    marks?: MarksUpdateManyWithoutYearNestedInput
    detain?: DetainUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutSubjectFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUncheckedUpdateManyWithoutYearNestedInput
    exam?: ExamUncheckedUpdateManyWithoutYearNestedInput
    marks?: MarksUncheckedUpdateManyWithoutYearNestedInput
    detain?: DetainUncheckedUpdateManyWithoutYearNestedInput
  }

  export type SubjectCreateWithoutStudentsInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    subjectCoordinator: UserCreateNestedOneWithoutSubjectCoordinatorInput
    faculties?: SubjectFacultyCreateNestedManyWithoutSubjectInput
    exam?: ExamCreateNestedManyWithoutSubjectInput
    year: YearCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
    faculties?: SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput
    exam?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type ExamCreateWithoutEligibleStudentsInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    faculty: UserCreateNestedOneWithoutExamInput
    marks?: MarksCreateNestedOneWithoutExamInput
    detain?: DetainCreateNestedManyWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutEligibleStudentsInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutEligibleStudentsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput>
  }

  export type MarksCreateWithoutStudentInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    exam: ExamCreateNestedOneWithoutMarksInput
    year: YearCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutStudentInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
    yearId: number
  }

  export type MarksCreateOrConnectWithoutStudentInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput>
  }

  export type MarksCreateManyStudentInputEnvelope = {
    data: MarksCreateManyStudentInput | MarksCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DetainCreateWithoutStudentInput = {
    exam: ExamCreateNestedOneWithoutDetainInput
    year: YearCreateNestedOneWithoutDetainInput
  }

  export type DetainUncheckedCreateWithoutStudentInput = {
    id?: number
    examId: string
    yearId: number
  }

  export type DetainCreateOrConnectWithoutStudentInput = {
    where: DetainWhereUniqueInput
    create: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput>
  }

  export type DetainCreateManyStudentInputEnvelope = {
    data: DetainCreateManyStudentInput | DetainCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type SubjectUpdateManyWithWhereWithoutStudentsInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutStudentsInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutEligibleStudentsInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutEligibleStudentsInput, ExamUncheckedUpdateWithoutEligibleStudentsInput>
    create: XOR<ExamCreateWithoutEligibleStudentsInput, ExamUncheckedCreateWithoutEligibleStudentsInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutEligibleStudentsInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutEligibleStudentsInput, ExamUncheckedUpdateWithoutEligibleStudentsInput>
  }

  export type ExamUpdateManyWithWhereWithoutEligibleStudentsInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutEligibleStudentsInput>
  }

  export type MarksUpsertWithWhereUniqueWithoutStudentInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutStudentInput, MarksUncheckedUpdateWithoutStudentInput>
    create: XOR<MarksCreateWithoutStudentInput, MarksUncheckedCreateWithoutStudentInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutStudentInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutStudentInput, MarksUncheckedUpdateWithoutStudentInput>
  }

  export type MarksUpdateManyWithWhereWithoutStudentInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutStudentInput>
  }

  export type DetainUpsertWithWhereUniqueWithoutStudentInput = {
    where: DetainWhereUniqueInput
    update: XOR<DetainUpdateWithoutStudentInput, DetainUncheckedUpdateWithoutStudentInput>
    create: XOR<DetainCreateWithoutStudentInput, DetainUncheckedCreateWithoutStudentInput>
  }

  export type DetainUpdateWithWhereUniqueWithoutStudentInput = {
    where: DetainWhereUniqueInput
    data: XOR<DetainUpdateWithoutStudentInput, DetainUncheckedUpdateWithoutStudentInput>
  }

  export type DetainUpdateManyWithWhereWithoutStudentInput = {
    where: DetainScalarWhereInput
    data: XOR<DetainUpdateManyMutationInput, DetainUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubjectCreateWithoutExamInput = {
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    subjectCoordinator: UserCreateNestedOneWithoutSubjectCoordinatorInput
    students?: StudentCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyCreateNestedManyWithoutSubjectInput
    year: YearCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutExamInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
    students?: StudentUncheckedCreateNestedManyWithoutSubjectsInput
    faculties?: SubjectFacultyUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutExamInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutExamInput, SubjectUncheckedCreateWithoutExamInput>
  }

  export type UserCreateWithoutExamInput = {
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectCreateNestedManyWithoutSubjectCoordinatorInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutExamInput = {
    id?: number
    userId: string
    name: string
    email: string
    password: string
    department: $Enums.Department
    role: $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedCreateNestedManyWithoutSubjectCoordinatorInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutExamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
  }

  export type StudentCreateWithoutExamsInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectCreateNestedManyWithoutStudentsInput
    marks?: MarksCreateNestedManyWithoutStudentInput
    detain?: DetainCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutExamsInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    marks?: MarksUncheckedCreateNestedManyWithoutStudentInput
    detain?: DetainUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutExamsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput>
  }

  export type MarksCreateWithoutExamInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    student: StudentCreateNestedOneWithoutMarksInput
    year: YearCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutExamInput = {
    id?: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    yearId: number
  }

  export type MarksCreateOrConnectWithoutExamInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
  }

  export type DetainCreateWithoutExamInput = {
    student: StudentCreateNestedOneWithoutDetainInput
    year: YearCreateNestedOneWithoutDetainInput
  }

  export type DetainUncheckedCreateWithoutExamInput = {
    id?: number
    studentId: string
    yearId: number
  }

  export type DetainCreateOrConnectWithoutExamInput = {
    where: DetainWhereUniqueInput
    create: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput>
  }

  export type DetainCreateManyExamInputEnvelope = {
    data: DetainCreateManyExamInput | DetainCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type YearCreateWithoutExamInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutYearInput
    marks?: MarksCreateNestedManyWithoutYearInput
    detain?: DetainCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutExamInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectUncheckedCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutYearInput
    marks?: MarksUncheckedCreateNestedManyWithoutYearInput
    detain?: DetainUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutExamInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutExamInput, YearUncheckedCreateWithoutExamInput>
  }

  export type SubjectUpsertWithoutExamInput = {
    update: XOR<SubjectUpdateWithoutExamInput, SubjectUncheckedUpdateWithoutExamInput>
    create: XOR<SubjectCreateWithoutExamInput, SubjectUncheckedCreateWithoutExamInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutExamInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutExamInput, SubjectUncheckedUpdateWithoutExamInput>
  }

  export type SubjectUpdateWithoutExamInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    subjectCoordinator?: UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput
    students?: StudentUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUpdateManyWithoutSubjectNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutExamInput = {
    update: XOR<UserUpdateWithoutExamInput, UserUncheckedUpdateWithoutExamInput>
    create: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamInput, UserUncheckedUpdateWithoutExamInput>
  }

  export type UserUpdateWithoutExamInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUpdateManyWithoutSubjectCoordinatorNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    subjectCoordinator?: SubjectUncheckedUpdateManyWithoutSubjectCoordinatorNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutExamsInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutExamsInput, StudentUncheckedUpdateWithoutExamsInput>
    create: XOR<StudentCreateWithoutExamsInput, StudentUncheckedCreateWithoutExamsInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutExamsInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutExamsInput, StudentUncheckedUpdateWithoutExamsInput>
  }

  export type StudentUpdateManyWithWhereWithoutExamsInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutExamsInput>
  }

  export type MarksUpsertWithoutExamInput = {
    update: XOR<MarksUpdateWithoutExamInput, MarksUncheckedUpdateWithoutExamInput>
    create: XOR<MarksCreateWithoutExamInput, MarksUncheckedCreateWithoutExamInput>
    where?: MarksWhereInput
  }

  export type MarksUpdateToOneWithWhereWithoutExamInput = {
    where?: MarksWhereInput
    data: XOR<MarksUpdateWithoutExamInput, MarksUncheckedUpdateWithoutExamInput>
  }

  export type MarksUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
    year?: YearUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainUpsertWithWhereUniqueWithoutExamInput = {
    where: DetainWhereUniqueInput
    update: XOR<DetainUpdateWithoutExamInput, DetainUncheckedUpdateWithoutExamInput>
    create: XOR<DetainCreateWithoutExamInput, DetainUncheckedCreateWithoutExamInput>
  }

  export type DetainUpdateWithWhereUniqueWithoutExamInput = {
    where: DetainWhereUniqueInput
    data: XOR<DetainUpdateWithoutExamInput, DetainUncheckedUpdateWithoutExamInput>
  }

  export type DetainUpdateManyWithWhereWithoutExamInput = {
    where: DetainScalarWhereInput
    data: XOR<DetainUpdateManyMutationInput, DetainUncheckedUpdateManyWithoutExamInput>
  }

  export type YearUpsertWithoutExamInput = {
    update: XOR<YearUpdateWithoutExamInput, YearUncheckedUpdateWithoutExamInput>
    create: XOR<YearCreateWithoutExamInput, YearUncheckedCreateWithoutExamInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutExamInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutExamInput, YearUncheckedUpdateWithoutExamInput>
  }

  export type YearUpdateWithoutExamInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutYearNestedInput
    marks?: MarksUpdateManyWithoutYearNestedInput
    detain?: DetainUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUncheckedUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput
    marks?: MarksUncheckedUpdateManyWithoutYearNestedInput
    detain?: DetainUncheckedUpdateManyWithoutYearNestedInput
  }

  export type StudentCreateWithoutMarksInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectCreateNestedManyWithoutStudentsInput
    exams?: ExamCreateNestedManyWithoutEligibleStudentsInput
    detain?: DetainCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMarksInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    exams?: ExamUncheckedCreateNestedManyWithoutEligibleStudentsInput
    detain?: DetainUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMarksInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
  }

  export type ExamCreateWithoutMarksInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    faculty: UserCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    detain?: DetainCreateNestedManyWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutMarksInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    detain?: DetainUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutMarksInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutMarksInput, ExamUncheckedCreateWithoutMarksInput>
  }

  export type YearCreateWithoutMarksInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutYearInput
    exam?: ExamCreateNestedManyWithoutYearInput
    detain?: DetainCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutMarksInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectUncheckedCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutYearInput
    exam?: ExamUncheckedCreateNestedManyWithoutYearInput
    detain?: DetainUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutMarksInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutMarksInput, YearUncheckedCreateWithoutMarksInput>
  }

  export type StudentUpsertWithoutMarksInput = {
    update: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMarksInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type StudentUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUpdateManyWithoutStudentsNestedInput
    exams?: ExamUpdateManyWithoutEligibleStudentsNestedInput
    detain?: DetainUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    exams?: ExamUncheckedUpdateManyWithoutEligibleStudentsNestedInput
    detain?: DetainUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExamUpsertWithoutMarksInput = {
    update: XOR<ExamUpdateWithoutMarksInput, ExamUncheckedUpdateWithoutMarksInput>
    create: XOR<ExamCreateWithoutMarksInput, ExamUncheckedCreateWithoutMarksInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutMarksInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutMarksInput, ExamUncheckedUpdateWithoutMarksInput>
  }

  export type ExamUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type YearUpsertWithoutMarksInput = {
    update: XOR<YearUpdateWithoutMarksInput, YearUncheckedUpdateWithoutMarksInput>
    create: XOR<YearCreateWithoutMarksInput, YearUncheckedCreateWithoutMarksInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutMarksInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutMarksInput, YearUncheckedUpdateWithoutMarksInput>
  }

  export type YearUpdateWithoutMarksInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutYearNestedInput
    exam?: ExamUpdateManyWithoutYearNestedInput
    detain?: DetainUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutMarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUncheckedUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput
    exam?: ExamUncheckedUpdateManyWithoutYearNestedInput
    detain?: DetainUncheckedUpdateManyWithoutYearNestedInput
  }

  export type StudentCreateWithoutDetainInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectCreateNestedManyWithoutStudentsInput
    exams?: ExamCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDetainInput = {
    id?: string
    studentId: number
    name: string
    email: string
    department: $Enums.Department
    semester: number
    class: string
    subjects?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    exams?: ExamUncheckedCreateNestedManyWithoutEligibleStudentsInput
    marks?: MarksUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDetainInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDetainInput, StudentUncheckedCreateWithoutDetainInput>
  }

  export type ExamCreateWithoutDetainInput = {
    id?: string
    name: string
    date?: Date | string | null
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    subject: SubjectCreateNestedOneWithoutExamInput
    faculty: UserCreateNestedOneWithoutExamInput
    eligibleStudents?: StudentCreateNestedManyWithoutExamsInput
    marks?: MarksCreateNestedOneWithoutExamInput
    year: YearCreateNestedOneWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutDetainInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
    eligibleStudents?: StudentUncheckedCreateNestedManyWithoutExamsInput
    marks?: MarksUncheckedCreateNestedOneWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutDetainInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutDetainInput, ExamUncheckedCreateWithoutDetainInput>
  }

  export type YearCreateWithoutDetainInput = {
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyCreateNestedManyWithoutYearInput
    exam?: ExamCreateNestedManyWithoutYearInput
    marks?: MarksCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutDetainInput = {
    id?: number
    year: string
    startDate: Date | string
    endDate: Date | string
    subject?: SubjectUncheckedCreateNestedManyWithoutYearInput
    subjectFaculty?: SubjectFacultyUncheckedCreateNestedManyWithoutYearInput
    exam?: ExamUncheckedCreateNestedManyWithoutYearInput
    marks?: MarksUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutDetainInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutDetainInput, YearUncheckedCreateWithoutDetainInput>
  }

  export type StudentUpsertWithoutDetainInput = {
    update: XOR<StudentUpdateWithoutDetainInput, StudentUncheckedUpdateWithoutDetainInput>
    create: XOR<StudentCreateWithoutDetainInput, StudentUncheckedCreateWithoutDetainInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutDetainInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutDetainInput, StudentUncheckedUpdateWithoutDetainInput>
  }

  export type StudentUpdateWithoutDetainInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUpdateManyWithoutStudentsNestedInput
    exams?: ExamUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDetainInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    exams?: ExamUncheckedUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExamUpsertWithoutDetainInput = {
    update: XOR<ExamUpdateWithoutDetainInput, ExamUncheckedUpdateWithoutDetainInput>
    create: XOR<ExamCreateWithoutDetainInput, ExamUncheckedCreateWithoutDetainInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutDetainInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutDetainInput, ExamUncheckedUpdateWithoutDetainInput>
  }

  export type ExamUpdateWithoutDetainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutDetainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
  }

  export type YearUpsertWithoutDetainInput = {
    update: XOR<YearUpdateWithoutDetainInput, YearUncheckedUpdateWithoutDetainInput>
    create: XOR<YearCreateWithoutDetainInput, YearUncheckedCreateWithoutDetainInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutDetainInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutDetainInput, YearUncheckedUpdateWithoutDetainInput>
  }

  export type YearUpdateWithoutDetainInput = {
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUpdateManyWithoutYearNestedInput
    exam?: ExamUpdateManyWithoutYearNestedInput
    marks?: MarksUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutDetainInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUncheckedUpdateManyWithoutYearNestedInput
    subjectFaculty?: SubjectFacultyUncheckedUpdateManyWithoutYearNestedInput
    exam?: ExamUncheckedUpdateManyWithoutYearNestedInput
    marks?: MarksUncheckedUpdateManyWithoutYearNestedInput
  }

  export type SubjectCreateManyYearInput = {
    id?: number
    code: string
    name: string
    semester: number
    coordinatorId: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
  }

  export type SubjectFacultyCreateManyYearInput = {
    id?: string
    facultyId: number
    subjectId: number
    role: $Enums.SubjectFacultyRole
  }

  export type ExamCreateManyYearInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
  }

  export type MarksCreateManyYearInput = {
    id?: string
    studentId: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
  }

  export type DetainCreateManyYearInput = {
    id?: number
    studentId: string
    examId: string
  }

  export type SubjectUpdateWithoutYearInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    subjectCoordinator?: UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput
    students?: StudentUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUpdateManyWithoutSubjectNestedInput
    exam?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput
    exam?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectFacultyUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    faculty?: UserUpdateOneRequiredWithoutSubjectFacultyNestedInput
    subject?: SubjectUpdateOneRequiredWithoutFacultiesNestedInput
  }

  export type SubjectFacultyUncheckedUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
  }

  export type ExamUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
  }

  export type MarksUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
    exam?: ExamUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUncheckedUpdateManyWithoutYearInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type DetainUpdateWithoutYearInput = {
    student?: StudentUpdateOneRequiredWithoutDetainNestedInput
    exam?: ExamUpdateOneRequiredWithoutDetainNestedInput
  }

  export type DetainUncheckedUpdateWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type DetainUncheckedUpdateManyWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateManySubjectCoordinatorInput = {
    id?: number
    code: string
    name: string
    semester: number
    type: $Enums.SubjectType
    dep_IT?: boolean | null
    dep_CE?: boolean | null
    dep_CSE?: boolean | null
    theory_hour?: number | null
    practical_hour?: number | null
    theory_credite?: number | null
    practical_credite?: number | null
    theory_int_marks?: number | null
    practical_int_marks?: number | null
    theory_ext_marks?: number | null
    practical_ext_marks?: number | null
    yearId: number
  }

  export type SubjectFacultyCreateManyFacultyInput = {
    id?: string
    subjectId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type ExamCreateManyFacultyInput = {
    id?: string
    name: string
    date?: Date | string | null
    subjectId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
  }

  export type SubjectUpdateWithoutSubjectCoordinatorInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUpdateManyWithoutSubjectNestedInput
    exam?: ExamUpdateManyWithoutSubjectNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSubjectCoordinatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutSubjectsNestedInput
    faculties?: SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput
    exam?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutSubjectCoordinatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    subject?: SubjectUpdateOneRequiredWithoutFacultiesNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectFacultyNestedInput
  }

  export type SubjectFacultyUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type ExamUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyCreateManySubjectInput = {
    id?: string
    facultyId: number
    role: $Enums.SubjectFacultyRole
    yearId: number
  }

  export type ExamCreateManySubjectInput = {
    id?: string
    name: string
    date?: Date | string | null
    facultyId: number
    totalMarks?: number | null
    effectiveMarks?: number | null
    class1?: boolean | null
    class2?: boolean | null
    status?: $Enums.ExamStatus | null
    yearId: number
  }

  export type StudentUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    exams?: ExamUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUpdateManyWithoutStudentNestedInput
    detain?: DetainUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    exams?: ExamUncheckedUpdateManyWithoutEligibleStudentsNestedInput
    marks?: MarksUncheckedUpdateManyWithoutStudentNestedInput
    detain?: DetainUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectFacultyUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    faculty?: UserUpdateOneRequiredWithoutSubjectFacultyNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectFacultyNestedInput
  }

  export type SubjectFacultyUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectFacultyUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    role?: EnumSubjectFacultyRoleFieldUpdateOperationsInput | $Enums.SubjectFacultyRole
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type ExamUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    eligibleStudents?: StudentUpdateManyWithoutExamsNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    eligibleStudents?: StudentUncheckedUpdateManyWithoutExamsNestedInput
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type MarksCreateManyStudentInput = {
    id?: string
    earnedMarks: number
    effectiveMarks: number
    examId: string
    yearId: number
  }

  export type DetainCreateManyStudentInput = {
    id?: number
    examId: string
    yearId: number
  }

  export type SubjectUpdateWithoutStudentsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    subjectCoordinator?: UserUpdateOneRequiredWithoutSubjectCoordinatorNestedInput
    faculties?: SubjectFacultyUpdateManyWithoutSubjectNestedInput
    exam?: ExamUpdateManyWithoutSubjectNestedInput
    year?: YearUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
    faculties?: SubjectFacultyUncheckedUpdateManyWithoutSubjectNestedInput
    exam?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    coordinatorId?: IntFieldUpdateOperationsInput | number
    type?: EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType
    dep_IT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dep_CSE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    theory_hour?: NullableIntFieldUpdateOperationsInput | number | null
    practical_hour?: NullableIntFieldUpdateOperationsInput | number | null
    theory_credite?: NullableIntFieldUpdateOperationsInput | number | null
    practical_credite?: NullableIntFieldUpdateOperationsInput | number | null
    theory_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_int_marks?: NullableIntFieldUpdateOperationsInput | number | null
    theory_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    practical_ext_marks?: NullableIntFieldUpdateOperationsInput | number | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type ExamUpdateWithoutEligibleStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    subject?: SubjectUpdateOneRequiredWithoutExamNestedInput
    faculty?: UserUpdateOneRequiredWithoutExamNestedInput
    marks?: MarksUpdateOneWithoutExamNestedInput
    detain?: DetainUpdateManyWithoutExamNestedInput
    year?: YearUpdateOneRequiredWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutEligibleStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
    marks?: MarksUncheckedUpdateOneWithoutExamNestedInput
    detain?: DetainUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutEligibleStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjectId?: IntFieldUpdateOperationsInput | number
    facultyId?: IntFieldUpdateOperationsInput | number
    totalMarks?: NullableIntFieldUpdateOperationsInput | number | null
    effectiveMarks?: NullableIntFieldUpdateOperationsInput | number | null
    class1?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class2?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus | null
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type MarksUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutMarksNestedInput
    year?: YearUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type MarksUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedMarks?: IntFieldUpdateOperationsInput | number
    effectiveMarks?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainUpdateWithoutStudentInput = {
    exam?: ExamUpdateOneRequiredWithoutDetainNestedInput
    year?: YearUpdateOneRequiredWithoutDetainNestedInput
  }

  export type DetainUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainCreateManyExamInput = {
    id?: number
    studentId: string
    yearId: number
  }

  export type StudentUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUpdateManyWithoutStudentsNestedInput
    marks?: MarksUpdateManyWithoutStudentNestedInput
    detain?: DetainUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    subjects?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    marks?: MarksUncheckedUpdateManyWithoutStudentNestedInput
    detain?: DetainUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    semester?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
  }

  export type DetainUpdateWithoutExamInput = {
    student?: StudentUpdateOneRequiredWithoutDetainNestedInput
    year?: YearUpdateOneRequiredWithoutDetainNestedInput
  }

  export type DetainUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
  }

  export type DetainUncheckedUpdateManyWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    yearId?: IntFieldUpdateOperationsInput | number
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