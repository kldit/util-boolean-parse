/*
 * https://stackoverflow.com/a/264180/539623
 */
Boolean.parse = function (str)
{
    if((/^(true|1)$/i).test(str))
    {
        return true;
    }
    else if((/^(false|0)$/i).test(str))
    {
        return false;
    }
    else
    {
        return undefined;
    }
};
