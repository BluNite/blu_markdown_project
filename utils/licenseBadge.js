// This function will determine badges based on license selection.
function licenseBadge(value) {
	if (value === "GNU GPLv3") {
		return "[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
	} else if (value === "GNU GPLv3") {
		return "[![(License: GPLv3)](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)]"
	} else if (value === "GNU LGPLv3") {
		return "[![License: LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)]"
	} else if (value === "Mozilla") {
		return "[![License: MPL2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)]"
	} else if (value === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)(https://opensource.org/licenses/MPL-2.0)]"
	} else if (value === "Apache") {
		return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)]"
	} else {
		return "[![License Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)(https://www.boost.org/LICENSE_1_0.txt)]"
	}
}
/*/check
let value = 'Apache'
var done = licenseBadge(value)
console.log(done)
/*/
module.exports = { licenseBadge: licenseBadge, }