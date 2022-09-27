console.log("Updating images...");

function reroute_ipfs(old_ipfs, new_ipfs) {
    for (x of document.querySelectorAll('img.w-full')) {
        x.src = x.attributes['rel'].value.split('?')[0].replace(old_ipfs, new_ipfs);
    }
    
    for (x of document.querySelectorAll('img.object-cover')) { 
        x.src = x.attributes.src.value.split('?')[0].replace(old_ipfs, new_ipfs);
    }
}

reroute_ipfs("stargaze.mypinata.cloud", "cf-ipfs.com");
