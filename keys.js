console.log("this is loaded");

exports.spotify= {
    id: ProcessingInstruction.env.SPOTIFY_ID,
    secret: ProcessingInstruction.env.SPOTIFY_SECRET
};

exports.bands={
    id: ProcessingInstruction.env.BANDS_IN_TOWN_ID
};

exports.omdb={
    APIKEY:ProcessingInstruction.env.OMDB_APIKEY
};