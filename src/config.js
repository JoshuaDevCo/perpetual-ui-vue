const base_aa = import.meta.env.VITE_BASE_AA;
const factory_aa = import.meta.env.VITE_FACTORY_AA;
const reserve_price_usd = import.meta.env.VITE_RESERVE_PRICE_USD;
const reserve_price_oswap = import.meta.env.VITE_RESERVE_PRICE_OSWAP;
const registry_aa = import.meta.env.VITE_REGISTRY_AA;

export const ADDRESSES = {
  base_aa,
  factory_aa,
  reserve_price_usd,
  reserve_price_oswap,
  registry_aa,
};

export const network = import.meta.env.VITE_NETWORK || "mainnet";

export const explorerUrl =
  network === "mainnet" ? "explorer.obyte.org" : "testnetexplorer.obyte.org";

export const fullExplorerUrlForUnit = `https://${explorerUrl}/`;

export const fullExplorerUrlForAddress = `https://${explorerUrl}/address/`;

export const fullExplorerUrlForAsset = `https://${explorerUrl}/asset/`;

export const tokenUrl = `https://${
  network === "mainnet" ? "" : "testnet."
}tokens.ooo/`;

export const perpDefaults = {
  swap_fee: 0.003,
  arb_profit_tax: 0.9,
  adjustment_period: 3 * 24 * 3600, // 3 days
  presale_period: 14 * 24 * 3600, // 14 days
  auction_price_halving_period: 3 * 24 * 3600, // 3 days
  token_share_threshold: 0.1, // 10%
  min_s0_share: 0.01, // 1%
};
