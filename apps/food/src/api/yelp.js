import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -FWuLssRO9RFHDUSSfhBvm__t_VZpDyQ-kRmaCJrIQxa-vJ2fpCWSXMPGWh1y2xd9lEP-EeidCCax0sQzMhakB0fiVVSIP2RRCSGGD2BqAQDwwRp-GteWSjyKOngX3Yx'
    }
});

