const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

// Filter & Effect Handlers
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("filter-btn")) {
		// Brightness
		if (e.target.classList.contains("brightness-add")) {
			Caman("#canvas", img, function () {
				this.brightness(5).render();
			});
		} else if (e.target.classList.contains("brightness-remove")) {
			Caman("#canvas", img, function () {
				this.brightness(-5).render();
			});
		}
		// Contrast
		else if (e.target.classList.contains("contrast-add")) {
			Caman("#canvas", img, function () {
				this.contrast(5).render();
			});
		} else if (e.target.classList.contains("contrast-remove")) {
			Caman("#canvas", img, function () {
				this.contrast(-5).render();
			});
		}
		// Saturation
		else if (e.target.classList.contains("saturation-add")) {
			Caman("#canvas", img, function () {
				this.saturation(5).render();
			});
		} else if (e.target.classList.contains("saturation-remove")) {
			Caman("#canvas", img, function () {
				this.saturation(-5).render();
			});
		}
		// Vibrance
		else if (e.target.classList.contains("vibrance-add")) {
			Caman("#canvas", img, function () {
				this.vibrance(5).render();
			});
		} else if (e.target.classList.contains("vibrance-remove")) {
			Caman("#canvas", img, function () {
				this.vibrance(-5).render();
			});
		}
		// Vintage
		else if (e.target.classList.contains("vintage-add")) {
			Caman("#canvas", img, function () {
				this.vintage().render();
			});
		}
		// Lomo
		else if (e.target.classList.contains("lomo-add")) {
			Caman("#canvas", img, function () {
				this.lomo().render();
			});
		}
		// Clarity
		else if (e.target.classList.contains("clarity-add")) {
			Caman("#canvas", img, function () {
				this.clarity().render();
			});
		}
		// Sin City
		else if (e.target.classList.contains("sincity-add")) {
			Caman("#canvas", img, function () {
				this.sinCity().render();
			});
		}
		// Cross Process
		else if (e.target.classList.contains("crossprocess-add")) {
			Caman("#canvas", img, function () {
				this.crossProcess().render();
			});
		}
		// Pinhole
		else if (e.target.classList.contains("pinhole-add")) {
			Caman("#canvas", img, function () {
				this.pinhole().render();
			});
		}
		// Nostalgia
		else if (e.target.classList.contains("nostalgia-add")) {
			Caman("#canvas", img, function () {
				this.nostalgia().render();
			});
		}
		// Her Majesty
		else if (e.target.classList.contains("hermajesty-add")) {
			Caman("#canvas", img, function () {
				this.herMajesty().render();
			});
		}
	}
});

// Revert Filters
revertBtn.addEventListener("click", (e) => {
	Caman("#canvas", img, function () {
		this.revert();
	});
});

// Upload File
uploadFile.addEventListener("change", () => {
	// Get File
	const file = document.getElementById("upload-file").files[0];

	// Initialize FileReader API
	const reader = new FileReader();

	// Check for file
	if (file) {
		// Set File Name
		fileName = file.name;

		// Read Data as URL
		reader.readAsDataURL(file);
	}

	// Add Image to Canvas
	reader.addEventListener(
		"load",
		() => {
			img = new Image();

			// Set Image Source
			img.src = reader.result;

			// Add Image to Canvas when onload
			img.onload = function () {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				canvas.removeAttribute("data-caman-id");
			};
		},
		false
	);
});

// Download Event
downloadBtn.addEventListener("click", () => {
	// Get File Extension
	const fileExtension = fileName.slice(-4);

	// Initialize New Filename
	let newFileName;

	// Check Image Extension
	if (fileExtension === ".jpg" || fileExtension === ".png") {
		// Add '-edited.png' to the original file name
		newFileName = fileName.substring(0, fileName.length - 4) + "-edited.png";
	}

	download(canvas, newFileName);
});

// Download
function download(canvas, filename) {
	// Initialize Event
	let e;

	// Create Link
	const link = document.createElement("a");

	// Set Props
	link.download = filename;
	link.href = canvas.toDataURL("image/png", 0.8);

	// New Mouse Event
	e = new MouseEvent("click");

	// Dispatch Event
	link.dispatchEvent(e);
}
