/**
 * Media operation tests.
 * @author anthony-arnold [anthony.arnold@uqconnect.edu.au]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Play Media: nothing",
        input: "",
        expectedOutput: "",
        recipeConfig: [
            { op: "Play Media", args: ["Raw"] }
        ]
    },
    {
        name: "Play Media: raw wav",
        input: "52494646bcaf010057415645666d74201000000001000100401f0000401f0000010008006461746198af0100818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081808180818081818281807f82807f817e81808280827d8086817d80828184817f80807d847f7e7e8582837b81857e7e82867f7c7f857e7d838182837f83847b7c838082807c7d838481827e83827c7f848383807c7f7c80848085808180827e83827f7c82827c7f858183807c837b847f7f82827a85837a8287817f7882827f89837e7f877b7e808281817f7e807c827b7e7d8383838486838883837d7d7682797d847f7d868287867d83847c81807d7e818080828082828380807e7f827d8181807e828082858581808081807f7a7f81808183807d7c7f7f858180848484857f8082817e827b7e7f7f8385807f7f7d858183808081807f7f8183847f7e7d81828284857d7f7e8084868182837d7e7d7a7e7e8085837f80807b7f7b7a80827d7f817e8386838588868386868689868586838386868584807c7a78787875706e6c6a6c6d70757a7c7e7f80858b94a1a29a9996989a9e9ca09ea19caa8e554129243e4d475e7184a0ada2a4a0918179646167696f7b7a8390939ca4aab2af9c9691909aa2a3ae74321e162a4d5c506c88a5babca6a4a7a18c7a5e5c646f6a6b6d7f929a8f858182827e79849299a1abb2c7cc975b3826324447496788a5b8b6a9aaa9977b60494c586467707c949fa195938f8f847a717c88a0aab7b7d6a46045362f3c483d6089a1acb4a3a4a89570615652676f6d788f97a29c8e8992898381808393999da9bf8e515e504c4e5d4879929a90a1909e9c855c5b5f717679768b9b9f958c838c8d8c7f8782969ca797a963585f63425d60687e93818b99938c84786f7e7a7b7f86838a867f8486858899939697a7a6be6e465f6c4d465d678e948275958a867063688e8b828fa2a0988b7a7f7c737185898a8e90989c9b8c8c6e5f5a655159646f727f737382857c7f898a9aa4b1b6cac5d4957d695b403c4152",
        expectedOutput: "<audio src='data:audio/x-wav;base64,UklGRryvAQBXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YZivAQCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGBgoGAf4KAf4F+gYCCgIJ9gIaBfYCCgYSBf4CAfYR/fn6FgoN7gYV+foKGf3x/hX59g4GCg3+DhHt8g4CCgHx9g4SBgn6Dgnx/hIODgHx/fICEgIWAgYCCfoOCf3yCgnx/hYGDgHyDe4R/f4KCeoWDeoKHgX94goJ/iYN+f4d7foCCgYF/foB8gnt+fYODg4SGg4iDg319doJ5fYR/fYaCh4Z9g4R8gYB9foGAgIKAgoKDgIB+f4J9gYGAfoKAgoWFgYCAgYB/en+BgIGDgH18f3+FgYCEhISFf4CCgX6Ce35/f4OFgH9/fYWBg4CAgYB/f4GDhH9+fYGCgoSFfX9+gISGgYKDfX59en5+gIWDf4CAe397eoCCfX+BfoOGg4WIhoOGhoaJhoWGg4OGhoWEgHx6eHh4dXBubGpsbXB1enx+f4CFi5ShopqZlpianpygnqGcqo5VQSkkPk1HXnGEoK2ipKCRgXlkYWdpb3t6g5CTnKSqsq+clpGQmqKjrnQyHhYqTVxQbIilurympKehjHpeXGRvamttf5Kaj4WBgoJ+eYSSmaGrssfMl1s4JjJER0lniKW4tqmqqZd7YElMWGRncHyUn6GVk4+PhHpxfIigqre31qRgRTYvPEg9YImhrLSjpKiVcGFWUmdvbXiPl6KcjomSiYOBgIOTmZ2pv45RXlBMTl1IeZKakKGQnpyFXFtfcXZ5doubn5WMg4yNjH+Hgpacp5epY1hfY0JdYGh+k4GLmZOMhHhvfnp7f4aDioZ/hIaFiJmTlpenpr5uRl9sTUZdZ46UgnWVioZwY2iOi4KPoqCYi3p/fHNxhYmKjpCYnJuMjG5fWmVRWWRvcn9zc4KFfH+JipqksbbKxdSVfWlbQDxBUg==' type='audio/x-wav' controls><p>Unsupported media type.</p></audio>",
        recipeConfig: [
            { op: "From Hex", args: ["Space"] },
            { op: "Play Media", args: ["Raw"] }
        ]
    },
    {
        name: "Play Media: hex ogg",
        input: "4f676753000200000000000000003129000000000000642493e3011e01766f72626973000000000244ac0000000000008138010000000000b8014f676753000000000000000000003129000001000000a3565ae9102dffffffffffffffffffffffffffff2403766f726269731d000000586970682e4f7267206c6962566f726269732049203230303230373137000000000105766f726269732242435601000001009c739a318799629452892194de3968196394526929a55a4aa9a183166babbdf7de7befbdf7de7bef1d739431469552524aa99d739631471563524a89a5945642682184d662abbdf7de6befb5f6de7bef99424c29a41442084a281d538c29a494424a4a0825640e3ac61c538c52093dd65e6bccbdb6d87beda163ce39e61c534c4a6821740e3ae69c534c4a68a984524206a153d05289adf7de62ebb9a5da7bef81d0905500000100c040101ab20a00500000108aa1188a028486ac020032000004e0288ee3388ee23892623916101ab20a00000200100000c0900c4bb114cdd1244dd22ccf134dd3377dd3366d55d7755dd7755dd77520346415000001004040a719a61a20c28c6416080d590500200000004420c3140342435601000001000052243949a2e4a494520e836431492ae5a494521ec5e4514d3206a594524a29a594524a29a594520a8364394a2ae5a4945212a364314aaad4a494521ee5e4",
        expectedOutput: "<audio src='data:audio/ogg;base64,T2dnUwACAAAAAAAAAAAxKQAAAAAAAGQkk+MBHgF2b3JiaXMAAAAAAkSsAAAAAAAAgTgBAAAAAAC4AU9nZ1MAAAAAAAAAAAAAMSkAAAEAAACjVlrpEC3//////////////////yQDdm9yYmlzHQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMDIwNzE3AAAAAAEFdm9yYmlzIkJDVgEAAAEAnHOaMYeZYpRSiSGU3jloGWOUUmkppVpKqaGDFmurvffee++999577x1zlDFGlVJSSqmdc5YxRxVjUkqJpZRWQmghhNZiq7333mvvtfbee++ZQkwppBRCCEooHVOMKaSUQkpKCCVkDjrGHFOMUgk91l5rzL222HvtoWPOOeYcU0xKaCF0DjrmnFNMSmiphFJCBqFT0FKJrffeYuu5pdp774HQkFUAAAEAwEAQGrIKAFAAABCKoRiKAoSGrAIAMgAABOAojuM4juI4kmI5FhAasgoAAAIAEAAAwJAMS7EUzdEkTdIszxNN0zd90zZtVdd1Xdd1Xdd1IDRkFQAAAQBAQKcZphogwoxkFggNWQUAIAAAAEQgwxQDQkNWAQAAAQAAUiQ5SaLkpJRSDoNkMUkq5aSUUh7F5FFNMgallFJKKaWUUkoppZRSCoNkOUoq5aSUUhKjZDFKqtSklFIe5eQ=' type='audio/ogg' controls><p>Unsupported media type.</p></audio>",
        recipeConfig: [
            { op: "Play Media", args: ["Hex"] }
        ]
    },
    {
        name: "Play Media: base64 webm",
        input: "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",
        expectedOutput: "<video src='data:video/webm;base64,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' type='video/webm' controls><p>Unsupported media type.</p></video>",
        recipeConfig: [
            { op: "Play Media", args: ["Base64"] }
        ]
    }
]);
