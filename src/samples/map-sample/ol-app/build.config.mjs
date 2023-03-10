// SPDX-FileCopyrightText: con terra GmbH and contributors
// SPDX-License-Identifier: Apache-2.0
import { defineBuildConfig } from "@open-pioneer/build-support";

export default defineBuildConfig({
    styles: "./app.css",
    i18n: ["en", "de"],
    services: {
        MainMapProvider: {
            provides: ["ol-map-config.MapConfigProvider"]
        }
    },
    ui: {
        references: ["map-sample-logging.LogService", "ol-map.MapRegistry"]
    }
});
