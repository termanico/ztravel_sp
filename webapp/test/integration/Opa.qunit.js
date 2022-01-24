sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztravelsp/test/integration/pages/MainListReport' ,
        'ztravelsp/test/integration/pages/MainObjectPage',
        'ztravelsp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztravelsp') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);