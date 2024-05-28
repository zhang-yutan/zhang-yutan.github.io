// scripts

function toggledisplay(id, disp)
{
	var e = document.getElementById(id);
	e.style.display = disp;
}

function showblock(id)
{
	toggledisplay(id, 'block');
	toggledisplay(id + 's', 'none');
	toggledisplay(id + 'h', 'inline');
}

function hideblock(id)
{
	toggledisplay(id, 'none');
	toggledisplay(id + 's', 'inline');
	toggledisplay(id + 'h', 'none');
}


function writeblock(baseId, showCaption, hideCaption)
{
	document.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" class="blocklinks" id="' 
	+ baseId + 
	's" onclick="showblock(\''
	+ baseId + '\');">'
	+ showCaption +
	'</a><a href="javascript:void(0);" id="'
	+ baseId +
	'h" class="blocklinks" style="display: none" onclick="hideblock(\''
	+ baseId +
	'\');">'
	+ hideCaption +
	'</a>');
}

function writeblockq(baseId, showCaption, hideCaption)
{
	document.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" class="blocklinks" id="' 
	+ baseId + 
	's" style="display: none" onclick="showblock(\''
	+ baseId + '\');">'
	+ showCaption +
	'</a><a href="javascript:void(0);" id="'
	+ baseId +
	'h" class="blocklinks" onclick="hideblock(\''
	+ baseId +
	'\');">'
	+ hideCaption +
	'</a>');
}

function writepaperblock(id)
{
	writeblock('paper' + id, 'Abstract', 'Hide abstract');
}

function writeexpblock(id)
{
	writeblock('exp' + id, 'Abstract', 'Hide abstract');
}

function writepapsblock(id)
{
	writeblock('paps' + id, 'Show', 'Hide');
}

function writepapsblockq(id)
{
	writeblockq('paps' + id, 'Show', 'Hide');
}

function writetitleblock(id)
{
	writeblockq('title' + id, 'Show', 'Hide');
}

function writeperformanceblock(id)
{
	writeblock('perf' + id, 'Show', 'Hide');
}

function writeperformanceblockq(id)
{
	writeblockq('perf' + id, 'Show', 'Hide');
}

function readmorevid()
{
	var dots = document.getElementById("dotsvid");
	var moreText = document.getElementById("morevid");
	var btnText = document.getElementById("myBtnvid");

	if (dots.style.display === "none") {
			dots.style.display = "inline";
			btnText.innerHTML = "[See Video]";
			moreText.style.display = "none";
	} else {
			dots.style.display = "none";
			btnText.innerHTML = "[Collapse Video]";
			moreText.style.display = "inline";
	}
}
