function getQuote() {
    // Create the arrays
    var quotes = new Array(12);
    var sources = new Array(12);

    // Initialize the arrays with quotes
    // Macbeth
    quotes[0] = "When shall we three meet again In thunder, lightning, or in rain?";
    sources[0] = "William Shakespeare, \'Macbeth\', Act I, Scene I.";

    quotes[1] = "When the battle\'s lost and won."
    sources[1] = "William Shakespeare, \'Macbeth\', Act I, Scene I.";

    quotes[2] = "Fair is foul, and foul is fair."
    sources[2] = "William Shakespeare, \'Macbeth\', Act I, Scene I.";

    quotes[3] = "Look like the innocent flower, But be the serpent under it.";
    sources[3] = "Lady Macbeth, \'Macbeth\', Act I, Scene V.";

    // A Christmas Carol
    quotes[4] = "I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future.";
    sources[4] = "Ebenezer Scrooge, \'A Christmas Carol\'.";

    quotes[5] = "Men\'s courses will foreshadow certain ends, to which, if persevered in, they must lead. But if the courses are departed from, the ends will change.";
    sources[5] = "Ebenezer Scrooge, \'A Christmas Carol\'.";

    quotes[6] = "Oh cold, cold, rigid, dreadful Death, set up thine altar here, and dress it with such terrors as thou hast at thy command: for this is thy dominion! But of the loved, revered, and honoured head, thou canst not turn one hair to thy dread purposes, or make one feature odious.";
    sources[6] = "\'A Christmas Carol\'.";

    quotes[7] = "Spirit, tell me if Tiny Tim will live.";
    sources[7] = "Ebenezer Scrooge, \'A Christmas Carol\'.";

    // An Inspector Calls
    quotes[8] = "You\'re squiffy";
    sources[8] = " Sheila to Eric, \'An Inspector Calls\', Act 1.";

    quotes[9] = "I speak as a hard headed business man;";
    sources[9] = "Mr Birling, \'An Inspector Calls\', Act 1.";

    quotes[10] = "Unsinkable, completely unsinkable";
    sources[10] = "Mr Birling, \'An Inspector Calls\', Act 1";

    quotes[11] = "We really must stop these silly pretence";
    sources[11] = "Sheila to Mrs Birling, \'An Inspector Calls\', Act 2";

    // Get a random index into the arrays
    i = Math.floor(Math.random() * quotes.length);

    // Write out the quote as HTML
    document.write("<h2>\"");
    document.write(quotes[i] + "\"");
    document.write("<h4>" + sources[i] + "</h4>");
    document.write("</h2>");
}

getQuote();