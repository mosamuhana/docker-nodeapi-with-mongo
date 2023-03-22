import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { JWT_SECRET } from './constants';

let _salt: string;

const _genSalt = async () => _salt ? _salt : await genSalt(10);

export const hashPassword = async (password: string) => await hash(password, await _genSalt());

export const comparePassword = (data: string | Buffer, encrypted: string) => compare(data, encrypted);

export const generateToken = (user: any) => sign({ userId: user._id }, JWT_SECRET);
