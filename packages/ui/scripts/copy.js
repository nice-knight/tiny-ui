#!/usr/bin/env node

import fs from 'fs-extra';
import { resolve }  from 'path';

const sourceDir = '';
const targetDir = '';

try {
    // console.log(resolve(__dirname, './'));
    // fs.copySync(sourceDir, targetDir);
    console.log('success!');
} catch (err) {
    console.error(err);
}

