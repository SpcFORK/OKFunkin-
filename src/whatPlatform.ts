const isBrowser: boolean =
  typeof window !== "undefined" && typeof window.document !== "undefined";

const isNode: boolean =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export { isBrowser, isNode };
