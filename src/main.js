//все js модули создаем в папке scripts, и подключаем сюда
import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
	require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/FontAwesome";
