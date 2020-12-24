<template>
  <div class="content-base-desktop-box">
    <div class="content-base-desktop home-block6">
      <div class="tariff-descr1-box">
        <p>
          <span class="tariff-descr1-text__normal">пакет </span>
          <span class="tariff-descr1-text__big">Productium </span>
          <span class="tariff-descr1-text__big tariff-descr1-text__big-blue">premium </span>
          <span class="tariff-descr1-text__normal">для</span>
        </p>
        <p class="tariff-descr1-text__normal"
           style="margin-top: -6px;">первой тысячи пользователей совершенно бесплатно</p>
      </div>
      <div class="tariff-info">
        <TariffInfo v-for="(_info, i) in tariffInfoList()"
                    :key="i"
                    :item="_info" />
      </div>
      <div class="tariff-descr2-box">
        <p>
          <span class="tariff-descr2-text tariff-descr2-text__bold">Productium </span>
          <span class="tariff-descr2-text tariff-descr2-text__blue">community </span>
          <span class="tariff-descr2-text"> откроет для вас</span>
        </p>
        <p class="tariff-descr2-text"
           style="margin-top: -6px;">новые возможности экономии времени</p>
        <p class="tariff-descr2-text"
           style="margin-top: -6px;">на решение вопросов дизайна и личного</p>
        <p class="tariff-descr2-text"
           style="margin-top: -6px;">роста навыков в вашей сфере</p>
      </div>
    </div>
  </div>
</template>

<script>
import TariffInfo from "@/components/includes/TariffInfo";

export default {
  name: "Block6",
  components: {
    TariffInfo
  },
  data: () => ({

  }),
  methods: {
    tariffInfoList() {
      return [
        { /* FREE */
          isDisable: true,
          title: 'Free',
          enums: [
            {
              words: this.freeSpaceEnum(1)
            },
            {
              words: this.peopleInTeam(3)
            },
            {
              words: this.itemCounts('проектов', false, 3)
            },
            {
              words: this.itemCounts('слайдов', false, 5)
            },
            {
              words: this.itemCounts('кейсов на слайд', false, 3)
            },
            {
              words: [
                { text: 'возможность получать фидбек в комьюнити', isBold: false },
              ]
            },
          ],
          cost: 0,
          button: 'Не доступен'
        },
        { /* STANDARD */
          isDisable: true,
          title: 'Standard',
          enums: [
            {
              words: this.freeSpaceEnum(1)
            },
            {
              words: this.peopleInTeam(3)
            },
            {
              words: this.itemCounts('проектов', false, 10)
            },
            {
              words: this.itemCounts('слайдов', false, 10)
            },
            {
              words: this.itemCounts('кейсов на слайд', false, 10)
            },
            {
              words: [
                { text: 'возможность получать фидбек в комьюнити', isBold: false },
              ]
            },
            {
              words: [
                { text: 'email  ', isBold: true },
                { text: 'техническая поддержка', isBold: false },
              ]
            },
          ],
          cost: 3,
          button: 'Не доступен'
        },
        { /* PREMIUM */
          isDisable: false,
          title: 'Premium',
          enums: [
            {
              words: this.freeSpaceEnum(5)
            },
            {
              words: this.peopleInTeam(20)
            },
            {
              words: this.itemCounts('проектов', true)
            },
            {
              words: this.itemCounts('слайдов', true)
            },
            {
              words: this.itemCounts('кейсов', true)
            },
            {
              words: [
                { text: 'возможность ', isBold: false },
                { text: 'зарабатывать ', isBold: true },
                { text: 'на менторстве в комьюнити', isBold: false },
              ]
            },
            {
              words: [
                { text: '24/7  ', isBold: true },
                { text: 'техническая поддержка', isBold: false },
              ]
            },
          ],
          cost: 0,
          button: 'Начать бесплатно'
        },
      ];
    },
    freeSpaceEnum(space) {
      return [
        { text: space + ' ГБ ', isBold: true },
        { text: 'свободного пространства', isBold: false },
      ];
    },
    peopleInTeam(count) {
      return [
        { text: 'до ', isBold: false },
        { text: count, isBold: true },
        { text: ' человек в команде', isBold: false },
      ];
    },
    itemCounts(item, isUnlimited, count = 0) {
      if (isUnlimited) {
        return [
          { text: 'неограниченное ', isBold: true },
          { text: 'количество ' + item, isBold: false },
        ];
      }
      return [
        { text: 'до ', isBold: false },
        { text: count, isBold: true },
        { text: ' ' + item, isBold: false },
      ];
    },
  }
}
</script>