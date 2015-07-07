var _ = require('lodash')
    , env = require('./env')
    ;

module.exports = _.merge({
    simulation: true
    , instance_id : 'local_test_instance'
    , urls: {
        home : "http://rundexter.com/"
    }
    , instance_state: {
        active_step :  "local_test_step"
    }
    , workflow: {
        "id"            : "local_test_workflow"
        , "title"       : "Local test workflow"
        , "description" : "A fixture workflow used to test a module"
    }
    , environment: {
       /*
        * Any API keys you might need should go in the env.js file found in the same
        * folder as this fixture.  For example:
        *
        "parse_app_id": "abc123"
        , "parse_app_key": "foobar"
        */
    }
    , user: {
        /*
         * Your dexter user settings should go in the env.js file.  For example:
        profile: {
            email: "joe@test.com"
            , username: "joe"
        }
         */
    }
    , steps: {
        local_test_step: {
            id: 'local_test_step'
            , type: 'module'
            //The test runner will change YOUR_MODULE_NAME to the correct module name
            , name: 'YOUR_MODULE_NAME'
            , next: []
        }
    }
    , modules: {
        //The test runner will add the proper data here
    }
    , data: {
        local_test_step: {
            input: {
                //Replace VAR1 with the name of an expected input, and add more inputs as needed.
                text        : 'This is a test message',
                username    : 'Dexter Bot',
                channel     : '#dexter-test',
                webhook_url : 'https://hooks.slack.com/services/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',
                icon_emoji  : ':simple_smile:'
            }
        }
    }
}, env);
