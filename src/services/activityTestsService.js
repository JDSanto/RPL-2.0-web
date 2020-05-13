// @flow
import type { Activity, IOTest } from "../types";

const { request } = require("../utils/Request");

const producer = {
  base_url: process.env.API_BASE_URL || "localhost:8080",
};

exports.createIOTest = (
  courseId: number,
  activityId: number,
  textIn: string,
  textOut: string
): Promise<IOTest> =>
  request({
    url: `http://${producer.base_url}/api/courses/${courseId}/activities/${activityId}/iotests`,
    body: JSON.stringify({ text_in: textIn, text_out: textOut }),
    method: "POST",
  });

exports.updateIOTest = (
  courseId: number,
  activityId: number,
  ioTestId: number,
  textIn: string,
  textOut: string
): Promise<IOTest> =>
  request({
    url: `http://${producer.base_url}/api/courses/${courseId}/activities/${activityId}/iotests/${ioTestId}`,
    body: JSON.stringify({ text_in: textIn, text_out: textOut }),
    method: "PUT",
  });

exports.deleteIOTest = (
  courseId: number,
  activityId: number,
  ioTestId: number
): Promise<Activity> =>
  request({
    url: `http://${producer.base_url}/api/courses/${courseId}/activities/${activityId}/iotests/${ioTestId}`,
    method: "DELETE",
  });

exports.createUnitTest = (
  courseId: number,
  activityId: number,
  unitTestCode: string
): Promise<Activity> =>
  request({
    url: `http://${producer.base_url}/api/courses/${courseId}/activities/${activityId}/unittests`,
    body: JSON.stringify({ unit_test_code: unitTestCode }),
    method: "POST",
  });

exports.updateUnitTest = (
  courseId: number,
  activityId: number,
  unitTestCode: string
): Promise<Activity> =>
  request({
    url: `http://${producer.base_url}/api/courses/${courseId}/activities/${activityId}/unittests`,
    body: JSON.stringify({ unit_test_code: unitTestCode }),
    method: "PUT",
  });
