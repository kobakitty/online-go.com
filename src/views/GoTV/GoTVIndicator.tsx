/*
 * Copyright (C)  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React, { useState } from "react";
import { UIPush } from "UIPush";
import { Link } from "react-router-dom";

export const GoTVIndicator: React.FC = () => {
    const [streamCount, setStreamCount] = useState(0);

    const handleStreamUpdate = (data: any) => {
        const updatedStreams = JSON.parse(data);
        setStreamCount(updatedStreams.length);
    };

    return (
        <Link to="/gotv" className="GoTVIndicator" title="GoTV">
            <UIPush channel="gotv" event="update_streams" action={handleStreamUpdate} />
            {streamCount > 0 && (
                <>
                    <i className="fa fa-tv navbar-icon"></i>
                    <span className="count">{streamCount}</span>
                </>
            )}
        </Link>
    );
};