// Kaboom BIOS Basically :)
// https://kaboomjs.com

import { KaboomCtx } from "kaplay";
import g from "./global";
export const k = (globalThis as any).k as KaboomCtx;
export default k;
g.k = k;
