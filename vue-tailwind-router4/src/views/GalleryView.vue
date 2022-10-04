<template>
  <div class="grid grid-cols-1 bg-black sm:grid-cols-2 md:grid-cols-4">
    <div v-for="image in images">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094214/0U1A4650_2018.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094217/0U1A46501.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094219/0U1A4680.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094223/0U1A4684.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094225/0U1A4743.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094227/0U1A4800.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094230/1.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094232/6.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094235/10.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094237/12.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094240/18.jpg',
        'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/54/2017/11/26094242/23.jpg'
      ]
    };
  }
};
</script>
