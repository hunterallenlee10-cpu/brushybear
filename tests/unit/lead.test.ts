import { describe, expect, it } from "vitest";
import { publishedCities } from "@/data/cities";
import { SERVICE_ZIPS } from "@/data/service-zips";
import { checkStep1, checkStep2 } from "@/lib/lead-rules";
import { leadSchema } from "@/lib/validation";

const good = {
  services: ["exterior"],
  zip: "98033",
  name: "Dana Whitcomb",
  phone: "(425) 555-0142",
  email: "dana@example.com",
  address: "12 Market St",
  contactMethod: "text",
  smsConsent: true,
  photoUrls: [],
  source: "test",
  page: "/",
};

/** Fields the browser check flags, so we can compare with the server. */
const browserErrors = (v: typeof good) => Object.keys({ ...checkStep1(v), ...checkStep2(v) }).sort();
const serverErrors = (v: typeof good) => {
  const r = leadSchema.safeParse(v);
  return r.success ? [] : Array.from(new Set(r.error.issues.map((i) => String(i.path[0])))).sort();
};

const CASES: [string, Partial<typeof good>][] = [
  ["valid lead", {}],
  ["no service", { services: [] }],
  ["short zip", { zip: "9803" }],
  ["letters in zip", { zip: "98O33" }],
  ["one-letter name", { name: "D" }],
  ["9-digit phone", { phone: "425555014" }],
  ["11 digits with a 1", { phone: "1 425 555 0142" }],
  ["bad email", { email: "dana@example" }],
  ["empty address", { address: "  " }],
  ["unknown contact method", { contactMethod: "fax" }],
];

describe("lead checks: browser and server agree", () => {
  for (const [name, change] of CASES) {
    it(name, () => {
      const v = { ...good, ...change };
      expect(browserErrors(v)).toEqual(serverErrors(v));
    });
  }
});

describe("service ZIPs", () => {
  it("only point at published cities", () => {
    const slugs = new Set(publishedCities().map((c) => c.slug));
    expect(Object.values(SERVICE_ZIPS).filter((s) => !slugs.has(s))).toEqual([]);
  });

  it("cover every published city", () => {
    const covered = new Set(Object.values(SERVICE_ZIPS));
    expect(publishedCities().filter((c) => !covered.has(c.slug)).map((c) => c.slug)).toEqual([]);
  });
});
