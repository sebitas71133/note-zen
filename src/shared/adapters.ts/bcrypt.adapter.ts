import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class BycripAdapter {
  constructor() {}

  static hash = (password: string) => {
    const salt = genSaltSync();
    return hashSync(password, salt);
  };

  static compare = (password: string, hashed: string) => {
    return compareSync(password, hashed);
  };
}
