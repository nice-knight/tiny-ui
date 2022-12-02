#!/usr/bin/env node

import fse from 'fs-extra';
import { dirname, resolve }  from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = '';
const targetDir = '';

try {
    // console.log(resolve(__dirname, './'));
    // fse.copySync(sourceDir, targetDir);
    console.log('success!');
} catch (err) {
    console.error(err);
}

