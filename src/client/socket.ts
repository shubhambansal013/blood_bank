import { baseURL } from './constants';
import * as io from 'socket.io-client';
export const socket = io(baseURL);
