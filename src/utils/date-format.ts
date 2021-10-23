const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const formatUTCString = (utcString: string, format: string = DATE_TIME_FORMAT) => {

  return dayjs.utc(utcString).utcOffset(8).format(format);  //东八区

}
