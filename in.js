/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const perspective = require("@jpmorganchase/perspective/build/perspective.js");

const table = perspective.worker().table({x: 'datetime'});
table.update([{x: 1543440937729}]);
table.view().to_json().then(console.log);
