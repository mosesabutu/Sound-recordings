// import { afterEach, expect } from "vitest";
// import { cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom";

// afterEach(cleanup);

import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";

// expect.extend(matchers);

afterEach(cleanup);
