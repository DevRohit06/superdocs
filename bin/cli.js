#!/usr/bin/env node

import('../src/cli.js')
  .then(({ cli }) => cli())
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
