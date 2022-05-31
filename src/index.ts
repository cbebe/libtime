/**
 * TimeInterval nominal type and converters
 */
declare const TypeSymbol: unique symbol;
export type TimeInterval = number & { [TypeSymbol]: 'TimeInterval' };

/* Functions for converting to TimeInterval */

export const milliseconds = (howMany: number) => howMany as TimeInterval;
export const seconds = (howMany: number) => (howMany * 1000) as TimeInterval;
export const minutes = (howMany: number) => (howMany * 1000 * 60) as TimeInterval;
export const hours = (howMany: number) => (howMany * 1000 * 3600) as TimeInterval;
export const days = (howMany: number) => (howMany * 1000 * 3600 * 24) as TimeInterval;
export const weeks = (howMany: number) => (howMany * 1000 * 3600 * 24 * 7) as TimeInterval;

/* Functions for converting to numbers */

export const toSeconds = (timeInterval: TimeInterval) => timeInterval / 1000;
export const toMilliseconds = (timeInterval: TimeInterval) => timeInterval as number;
