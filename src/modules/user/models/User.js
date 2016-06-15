var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('User')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            nickname:     {type: String, required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
/**
 服务号粉丝
 id
 openid
 nickname
 headimgurl
 sex

 *language

 country
 province
 city

 *remark


 助手号联系人
 id
 openid / bcid
 nickname
 headimgurl
 sex

 country
 province
 city
 district

 */
