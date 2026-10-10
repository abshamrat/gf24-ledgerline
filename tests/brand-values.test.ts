import { test } from "node:test";
import assert from "node:assert/strict";
import { brand, brandCss, derivePalettes } from "@/brand";

test("brand source resolves to the Ledgerline brand sheet", () => {
  assert.equal(brand.productName, "Ledgerline");
  assert.equal(brand.logo, null, "logo stays null so BrandMark renders the wordmark");
  assert.equal(brand.primaryColor, "#1f5fbf");
  assert.equal(brand.tone, "plain and calm, short sentences");
});

test("the Ledgerline primary colour derives the preset's light and dark shades", () => {
  const { light, dark } = derivePalettes(brand.primaryColor);
  assert.equal(light.primary, "216 72% 44%");
  assert.equal(dark.primary, "216 72% 59%");
  assert.match(brandCss(), /--brand-primary:216 72% 44%/);
  assert.match(brandCss(), /--brand-primary:216 72% 59%/);
});
