function point_offset(angle, dist) {
	return { px: dist * Math.cos(Math.PI * angle / 180), py: dist * Math.sin(Math.PI * angle / 180), };
}

function point_dist(px, py) {
	return (px ** 2 + py ** 2) ** 0.5;
}

function points_dist(p1, p2) {
	return ((p1.px - p2.px) ** 2 + (p1.py - p2.py) ** 2) ** 0.5;
}

function point_normal(px, py) {
	let dist = (px ** 2 + py ** 2) ** 0.5;
	if (dist === 0)
		return { px: 0, py: 0 };
	return { px: px / dist, py: py / dist, };
}

function d2_point_offset(angle, px, py) {
	return {
		px: px * Math.cos(Math.PI * angle / 180) - py * Math.sin(Math.PI * angle / 180),
		py: py * Math.cos(Math.PI * angle / 180) + px * Math.sin(Math.PI * angle / 180),
	};
}

function point_angle(fromx, fromy, tox, toy) {
	let dx = tox - fromx;
	let dy = toy - fromy;
	let angle = Math.atan2(dy, dx);
	// console.log("angle: ", angle / Math.PI * 180);
	return angle / Math.PI * 180;
}

function points_angle(from, to) {
	let angle = Math.atan2(to.py - from.py, to.px - from.px);
	return angle / Math.PI * 180;
}

function point_rotate_90(p) {
	return { px: -p.py, py: p.px };
}

function point_rotate_180(p) {
	return { px: -p.px, py: -p.py };
}

function point_rotate_270(p) {
	return { px: p.py, py: -p.px };
}


function angle_diff(a, b) {
	let diff = a - b;
	while (diff > 180) {
		diff -= 360;
	}
	while (diff < -180) {
		diff += 360;
	}

	return diff;
}
