import numbro from "numbro";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";

dayjs.extend(duration);
dayjs.extend(utc);

export function useHelpers() {
  const average = (payload: number) =>
    numbro(payload).format({ average: true });

  const time = (value: string | number, format?: string) =>
    dayjs(parseFloat(value.toString()) * 1000)
      .utc()
      .format(format || "HH:mm:ss")
      .replace(/^0(?:0:0?)?/, "");

  const date = (value: string | number, format?: string) =>
    dayjs(value).format(format || "D MMM YYYY");

  return {
    average,
    time,
    date,
    dayjs,
  };
}
