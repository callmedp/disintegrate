import { postData } from '../../utils/fetcher';
import { setUserInfo } from './slice';
import { testSite, userInfoUrl } from '../../utils/urls';
import { getCookieData } from '../../utils/cookie';

export const userInfoThunk = async (dispatch) => {
    const userPayload = getCookieData()
    let payload = '';
    try {
        const response = await postData(`${testSite}${userInfoUrl}`, userPayload)
        payload = response.data;
        console.log("response userInfo", response)
    }
    catch{}
    dispatch(setUserInfo(payload));
}

