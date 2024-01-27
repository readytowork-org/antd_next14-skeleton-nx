module.exports = {
  '{apps,shared}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  '{apps,shared}/**/*.{js,ts,jsx,tsx,json,css}': [
    (files) => `nx affected:lint  --files=${files.join(',')}`,
    (files) => `nx format:write   --files=${files.join(',')}`
  ]
};
