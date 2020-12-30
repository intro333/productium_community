<template>
  <div class="home-block6" id="homeBlock6">
    <div :class="['content-base-box']">
      <div :class="['content-base']">
        <div class="tariff-descr1-box">
          <p class="tariff-descr1-text">
            <span class="tariff-descr1-text__normal">пакет </span>
            <span class="tariff-descr1-text__big">Productium </span>
            <span class="tariff-descr1-text__big tariff-descr1-text__big-blue">premium</span>
            <span class="tariff-descr1-text__normal content-hide-mobile"> для</span>
          </p>
          <p class="tariff-descr1-text tariff-descr1-text-overlay tariff-descr1-text__normal"
          >
            <span class="content-hide-desktop">для </span>
            <span>первой тысячи пользователей совершенно бесплатно</span>
          </p>
        </div>
        <div class="tariff-info scrollbar-hidden block-scroll-container content-hide-mobile">
          <TariffInfo v-for="(_info, i) in getTariffInfoByDevice"
                      :key="i"
                      :item="_info" />
        </div>
        <TariffDescr2 :hideOnMobile="true" />
      </div>
    </div>
    <div class="tariff-info scrollbar-hidden block-scroll-container content-hide-desktop">
      <div class="tariff-info-mobile">
        <TariffInfo v-for="(_info, i) in getTariffInfoByDevice"
                    :key="i"
                    :item="_info" />
      </div>
    </div>
    <div :class="['content-base-box', 'content-hide-desktop']">
      <div :class="['content-base']">
        <TariffDescr2 />
      </div>
    </div>
  </div>
</template>

<script>
import TariffInfo from "@/components/includes/TariffInfo";
import CommonMixin from "@/components/mixins/CommonMixin";
import TariffDescr2 from "@/components/includes/TariffDescr2";

export default {
  name: "Block6",
  mixins: [CommonMixin],
  components: {
    TariffInfo,
    TariffDescr2
  },
  data: () => ({

  }),
  computed: {
    getTariffInfoByDevice() {
      return this.isMobile() ? this.tariffInfoList().reverse() : this.tariffInfoList();
    },
  },
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
          button: 'Не доступен',
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
          button: 'Начать бесплатно',
          costDescription: 'для первой тысячи пользователей, потом 9$/в месяц',
          action: () => {
            // if (this.drawer) {
            //   this.drawerControl(false);
            // }
            this.bodyLock(true);
            this.setOpenAuthWindowState(true);
          }
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