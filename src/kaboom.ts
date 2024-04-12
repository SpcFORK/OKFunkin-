// Kaboom BIOS Basically :)
// https://kaboomjs.com

import { KaboomCtx } from "kaboom";
import g from "./global";
export const k = (globalThis as any).k as KaboomCtx;
export default k;
g.k = k;
