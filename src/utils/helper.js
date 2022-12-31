import moment from "moment-timezone";
import { dateFormat } from "@/constants/date-format";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";

export const isMobile = computed(() => window.innerWidth < "600");
export const isTablet = computed(
  () => window.innerWidth > "600" && window.innerWidth <= "1024"
);

export const slugify = (item) => item.replace(/ /g, "-").toLowerCase();

const validEmail = new RegExp(
  /^[a-zA-Z0-9-!#$%&'*+/=?^_`{|}~-]+([.][a-zA-Z0-9-!#$%&'*+/=?^_`{|]+)*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+([.][a-zA-Z0-9-]+)*$/
);
const validUrl = new RegExp(
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
);
const validName = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);

export const validateEmail = (email) => email && validEmail.test(email);
export const isValidURL = (url) => url && validUrl.test(url);
export const validateName = (name) => validName.test(name);

export const getFirstName = (name) => name.split(" ")[0];
export const getLastName = (name) => name.split(" ")[1];

export const todaysDate = {
  date: moment().format(dateFormat.YYYYMMDD),
};

export const tomorrowsDate = {
  date: moment().add(1, "days").format(dateFormat.YYYYMMDD),
};

export const getCurrentTimeZone = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  switch (timeZone) {
    case "America/New_York":
      return "EST";
    case "America/Porto_Velho":
      return "AST";
    case "America/Los_Angeles":
      return "PST";
    case "Asia/Calcutta":
    case "Asia/Kolkata":
      return "IST";
    case "Europe/London":
      return "UTC";
    case "Europe/Paris":
      return "MET";
    case "America/Denver":
      return "MST";
    case "Asia/Singapore":
      return "ACT";
  }
  return timeZone;
};

export const formatToDateTimezone = (dateTime, Timezone, formatNeeded) => {
  let date = "";
  switch (Timezone) {
    case "EST":
      date = moment(dateTime).tz("America/New_York").format(formatNeeded);
      break;
    case "AST":
      date = moment(dateTime).tz("America/Porto_Velho").format(formatNeeded);
      break;
    case "PST":
      date = moment(dateTime).tz("America/Los_Angeles").format(formatNeeded);
      break;
    case "IST":
      date = moment(dateTime).tz("Asia/Kolkata").format(formatNeeded);
      break;
    case "GMT":
      date = moment(dateTime).tz("Europe/London").format(formatNeeded);
      break;
    case "UTC":
      date = moment(dateTime).tz("Europe/London").format(formatNeeded);
      break;
    case "MET":
      date = moment(dateTime).tz("Europe/Paris").format(formatNeeded);
      break;
    case "MST":
      date = moment(dateTime).tz("America/Denver").format(formatNeeded);
      break;
    case "ACT":
      date = moment(dateTime).tz("Asia/Singapore").format(formatNeeded);
      break;
  }
  return date;
};

export const formatDateTimezone = (dateTime, Timezone) => {
  let date = "";
  let zone = "";
  switch (Timezone) {
    case "EST":
      zone = moment.tz(dateTime, "America/New_York").format("Z");
      break;
    case "AST":
      zone = moment.tz(dateTime, "America/Porto_Velho").format("Z");
      break;
    case "PST":
      zone = moment.tz(dateTime, "America/Los_Angeles").format("Z");
      break;
    case "IST":
      zone = moment.tz(dateTime, "Asia/Kolkata").format("Z");
      break;
    case "GMT":
      zone = moment.tz(dateTime, "Europe/London").format("Z");
      break;
    case "UTC":
      zone = moment.tz(dateTime, "Europe/London").format("Z");
      break;
    case "MET":
      zone = moment.tz(dateTime, "Europe/Paris").format("Z");
      break;
    case "MST":
      zone = moment.tz(dateTime, "America/Denver").format("Z");
      break;
    case "ACT":
      zone = moment.tz(dateTime, "Asia/Singapore").format("Z");
      break;
  }
  date = moment(`${dateTime}`).format();
  if (date.split("T")[1].includes("+")) {
    date = date.split("+")[0] + zone;
  } else {
    date = date.split("-")[0] + zone;
  }
  return date;
};

export const humanizeTime = (date, timeZone, prefix) => {
  const prefixText = prefix + " ";
  const timeNow = formatToDateTimezone(
    new Date(),
    timeZone,
    dateFormat.YYYYMMDDhhmmss
  );
  const givenDate = formatToDateTimezone(
    date,
    timeZone,
    dateFormat.YYYYMMDDhhmmss
  );
  const timeDiff = moment(timeNow).diff(moment(givenDate));
  const differenceInHours = moment.duration(timeDiff).asHours();
  const differenceInDays = moment.duration(timeDiff).asDays();
  const differenceInWeeks = moment.duration(timeDiff).asWeeks();
  const differenceInMonths = moment.duration(timeDiff).asMonths();
  const differenceInYears = moment.duration(timeDiff).asYears();

  if (differenceInYears >= 2) {
    return prefixText + Math.round(differenceInYears) + " years ago";
  } else if (differenceInYears > 1) {
    return prefixText + "Last year";
  } else if (differenceInMonths >= 1) {
    return prefixText + Math.round(differenceInMonths) + " months ago";
  } else if (differenceInWeeks > 4) {
    return prefixText + "Last month";
  } else if (differenceInWeeks > 2) {
    return prefixText + Math.round(differenceInWeeks) + " weeks ago";
  } else if (differenceInDays >= 7) {
    return prefixText + "Last Week ";
  } else if (differenceInDays > 2) {
    return prefixText + Math.round(differenceInDays) + " days ago";
  } else if (differenceInHours > 24) {
    return prefixText + "Yesterday";
  } else {
    return prefixText + "Today";
  }
};
export const formatToCurrency = (amount, decimal = 2, currency = "USD") => {
  if (isNaN(amount)) {
    return amount;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: decimal,
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (amount, decimal = 2) => {
  if (isNaN(amount)) {
    return amount;
  }
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimal,
    minimumFractionDigits: 0,
  }).format(amount);
};

export const calculateDuration = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  let duration = "";
  if (hours) {
    duration = hours > 1 ? `${hours} hours` : `${hours} hour`;
  }
  if (minutes) {
    duration += minutes > 1 ? ` ${minutes} minutes` : ` ${minutes} minute`;
  }
  return duration;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const userInfo = computed(() => {
  const { loggedInUserInfo } = storeToRefs(useAuthStore());
  const userInfo = loggedInUserInfo.value.data;
  return {
    userId: userInfo.userId,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    fullName: userInfo.firstName + " " + userInfo.lastName,
    email: userInfo.email,
    profilePhoto: userInfo.profilePhoto,
    userName: userInfo.userName,
  };
});
