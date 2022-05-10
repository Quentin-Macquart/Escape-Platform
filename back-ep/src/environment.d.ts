declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACK_PORT: string;
      DB_HOST: string;
      DB_PORT: string;
      // DB_USER=
      // DB_SCHEMA=
      // DB_PASSWORD=
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
