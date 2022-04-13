require('dotenv').config()

const config = {
    debug: true,
    executionRunMax: 20,
    apiUser: process.env.API_USER,
    apiPass: process.env.API_PASS,

    clusterId: "bmg-418f91ff-3591-4a04-8ad9-67c7b06d7ce6",
    webhook: "https://rhfac58po9.execute-api.us-east-2.amazonaws.com/prod",
    url: "https://s3-ttml-translation.s3.us-east-2.amazonaws.com/BM12TST02222022_EXPORT.dfxp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQCii38gwA5w3nDFGjyHndDLwwO7QYhgzBAo%2BYxLMBIyagIhAPtPbpx2uqUk2fIhBaRpPKMpzsLD6CaCpP26uqysPYaNKukCCGEQAhoMNDc2NDQyNTcxMjQ3IgykHFStW1zsQ40aE7oqxgKrx4bc%2BNiaDXlH6HsSvnAKiq%2FQYWL%2BrlOT7AhzFtBrKrTQ3Jiei9zpVbbIeRk87LvzHK6Kns4hef0Kn256TawUsGZXdMrMY1JaOw3NzpoogTf%2F8B2PH%2FghNNlb6aq1vSQBv1V%2FFs6QBstNrc%2FgL9egdpwPwjBtbMxA6lUi2%2BdYjQpU0E112Q0VtrRsZeAEeWXVr8V298NhXFhvLi9T5%2F9AXAg4%2BVAFp1aipIvRGGc2Zf6KkYCn%2F%2FFVZtSL7Wd9R59bKOSRCzV6FyLaHXwioUd0wxCVJB6ggce8muUG2t7%2Fgh7bcs%2FQQiF35b41Bm%2FG9%2FiNtMCw8neTHdVVTsLaSFcAiv%2F%2BsWc3UeahgMuBjKLp2jcpkJuU0LQa0Ptkuu2CAprA7ziHmYpg7B9FsdGyOZ6USO6zxyZAU%2BQTjciiKjAWz2W8C3VjSDDf7duSBjqGAoWTDhgVLuCtFSIGKosyszpSoAFxRx5uL8qnBm3H2em0cqWxXJWvF%2BrG7Ws5JSFCrOt379k5%2FYhsqH4rSSpIB6YOtBqORbZpNABiQIXld8I%2F7EgETuUM1leIwuwfhV8St8BvVUM6R4mtSBoVAjn02Td2Yx5S%2FCmOup3QZ5GE8OxcomrB2t5eEIvhKvs5oUJNKpJX0O7eaUqbUsWlZEf1kdw7ET5kOrowkrRpOYlrQVPx8S%2BcvLKej1QENgnDrSc8ZrHEskW46%2Fo%2Fdnreplt5uTqo5o7n1d1YBn5cRKAuHxfUPSZvPeILT7MyKRN%2BBXh0YvWiJi7uqPi0WeaS4P1lfw%2FDE0g1IvI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220413T161500Z&X-Amz-SignedHeaders=host&X-Amz-Expires=28800&X-Amz-Credential=ASIAW53RQWHXUOFC2HJW%2F20220413%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=741db35596d7ad801a032265a3db501e1e9bb3884c16c930a8431b4113d57a74"
}

module.exports = config;