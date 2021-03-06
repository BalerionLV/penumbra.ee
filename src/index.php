<?php include 'backend/db_connect.php'; ?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <!-- HEADER -->
    <?php
        include 'menu.php';
        include 'registration.php';
        include 'add_post.php';
    ?>
    <?php  ?>
    <!-- LANDING BODY -->
    <div class="landing-body">
        <div class="container">
            <div class="landing-logo-container">
                <img id="image" src="assets/caldari.png" width="250px">
            </div>
            <div class="landing-descr-container">
                <div class="landing-description">
                    The ensō is a circular symbol often referred to as “The Zen Circle“.
                    The word itself simply translates to “circle” in Japanese; however,
                    it embodies one of the defining aspects of Zen Buddhism, no-mind.
                    A state of no-mind is where a person is free from thoughts and emotions
                    while being completely present in the now. It is believed that while in
                    this state of total presence, true creativity can arise. Creating the zen
                    circle is often done standing, so as to utilize the entire body for the expression
                    of the brush stroke. Some Zen Buddhists “believe that the character of the artist
                    is fully exposed in how she or he draws an ensō. Only a person who is mentally and
                    spiritually complete can draw a true ensō. Some artists will practice drawing an ensō
                    daily, as a kind of Spiritual Practice.”
                </div>
                <div class="landing-button-container">
                    <input id="showInfoBtn" type="button" value="Show info">
                    <input id="showPreBtn" type="button" value="Prerequisites">
                </div>
                <div class="landing-descr-controls-container">
                    <input class="landing-controls-close" type="button" value="x">
                </div>
            </div>
        </div>

        <div class="landing-show-info left-invisible">
            <div class="landing-controls-container">
                <input id="closeInfoBtn" class="landing-controls-close" type="button" value="x">
            </div>
            <div class="landing-description-small">
                We are a friendly & laid back corp with great atmosphere where RL comes first!<br>
                We are a group of players who enjoy small-gang PVP, PVE, Exploring, Industry and PI.<br>
                Most of us know each other for years and are currently expanding, we are currently living in a C4 with a C3/C5 static<br><br>
            </div>
            <div class="landing-button-container">
                <input id="looking-for-button" type="button" value="Who are we looking for">
            </div>
        </div>

        <div class="landing-looking-for left-invisible">
            <div class="landing-controls-container-sides">
                <input id="close-looking-btn" class="landing-controls-close" type="button" value="x">
            </div>
            <div class="landing-description-sides">
                First and foremost we are looking for people that want to be in a WH, play EVE actively and<br>
                are open minded and social! We are a laid back and casual corp and as such are looking for people that don’t
                take Eve too seriously whilst we are active most of us have lives/jobs/kids that come before Eve. So if
                you are looking for an elite wh pvp corp then we are not that corp.<br>
                That said when we do find fights we take them if we have a chance of winning we also assist everyone
                with making isk, finding fights and the general wh life.<br><br>
                <b>Ideally you would have:</b><br><br>
                A willingness to learn and/or assist players, take to arms when needed!<br><br>
                An ability to integrate with current members, get involved in PVP (small gang, kill stuff and more
                than likely get killed), and be self-sufficient.<br>
            </div>
        </div>

        <div class="landing-prerequisites right-invisible">
            <div class="landing-controls-container">
                <input id="closePreBtn" class="landing-controls-close" type="button" value="x">
            </div>
            <div class="landing-description-small">
                Never lived in a WH? Not a problem we are happy to advise and give advice.<br>
                We have not set any minimum SP, so if you are unsure feel free to contact us!<br>
                No Trial accounts.<br>
                We are currently recruiting mainly EU TZ<br><br>
                <div class="requirements-landing">
                    - Be able to adapt to wh life<br>
                    - Fly T3 ships - this is preferred but negotiable<br>
                    - Be able to scan (skills to 4 minimum)<br>
                    - Sense of Humour<br>
                    - Full API KEY<br>
                    - Willingness to learn<br>
                    - TS required (to be used with a microphone)<br>
                </div>
            </div>
            <div class="landing-button-container">
                <input id="apply-button-landing"  type="button" value="Apply to join">
            </div>
        </div>

        <div class="landing-apply right-invisible">
            <div class="landing-controls-container">
                <input id="close-apply-btn" class="landing-controls-close" type="button" value="x">
            </div>
            <div class="landing-description-small">
                Join In-game Channel <b>Enso Pub</b><br><br>
                Or convo / mail <i>Vildermayne</i>, <i>Moggy Maxiumus</i> or <i>Aurora bound</i> for details.
            </div>
        </div>
    </div>
</body>
<?php include 'scripts.php'; ?>
</html>