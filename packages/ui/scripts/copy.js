#!/usr/bin/env node

import fse from 'fs-extra';
import { resolve }  from 'path';

const sourceDir = '';
const targetDir = '';

try {
    // console.log(resolve(__dirname, './'));
    // fse.copySync(sourceDir, targetDir);
    console.log('success!');
} catch (err) {
    console.error(err);
}

