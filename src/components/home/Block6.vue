<template>
  <div class="home-block6" id="homeBlock6">
    <div :class="['content-base-box']">
      <div :class="['content-base']">
        <div class="tariff-descr1-box" id="tariffDescr1Box">
          <p class="tariff-descr1-text">
            <span class="tariff-descr1-text__normal">{{ $t("block6.text1") }} </span>
            <span class="tariff-descr1-text__big">Productium </span>
            <span class="tariff-descr1-text__big tariff-descr1-text__big-blue">premium</span>
          </p>
          <p class="tariff-descr1-text tariff-descr1-text-overlay tariff-descr1-text__normal"
          >
            <span>{{ $t("block6.text2") }}</span>
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
    t(_key) {
      return this.$t("block6." + _key);
    },
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
              words: this.itemCounts(this.t('infoProjects'), 'upTo', 3)
            },
            {
              words: this.itemCounts(this.t('infoSlides'), 'upTo', 5)
            },
            {
              words: this.itemCounts(this.t('feedbackPossibility'), 'upTo', 3)
            },
            {
              words: [
                { text: this.t('casesPerSlide'), isBold: false },
              ]
            },
          ],
          cost: 0,
          button: this.$t("common.unavailable")
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
              words: this.itemCounts(this.t('infoProjects'), 'upTo', 10)
            },
            {
              words: this.itemCounts(this.t('infoSlides'), 'upTo', 10)
            },
            {
              words: this.itemCounts(this.t('casesPerSlide'), 'upTo', 10)
            },
            {
              words: [
                { text: this.t('feedbackPossibility'), isBold: false },
              ]
            },
            {
              words: [
                { text: 'email  ', isBold: true },
                { text: this.t('technicalSupport'), isBold: false },
              ]
            },
          ],
          cost: 6,
          button: this.$t("common.unavailable"),
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
              words: this.itemCounts(this.t('infoProjects'), 'over', 20)
            },
            {
              words: this.itemCounts(this.t('infoSlides'), 'over', 20)
            },
            {
              words: this.itemCounts(this.t('cases'), 'isUnlimited')
            },
            {
              words: [
                { text: this.t('edMeet1'), isBold: false },
                { text: this.t('edMeet2'), isBold: true },
                { text: this.t('edMeet3'), isBold: false },
                { text: this.t('edMeet4'), isBold: true },
              ]
            },
            {
              words: [
                { text: '24/7  ', isBold: true },
                { text: this.t('technicalSupport'), isBold: false },
              ]
            },
          ],
          cost: 0,
          button: this.$t("common.startedFree"),
          costDescription: this.t('forFirstThousand'),
          action: () => {
            this.bodyLock(true);
            this.setOpenAuthWindowState(true);
          }
        },
      ];
    },
    freeSpaceEnum(space) {
      return [
        { text: space + ' ГБ ', isBold: true },
        { text: this.t('freeSpace'), isBold: false },
      ];
    },
    peopleInTeam(count) {
      return [
        { text: 'до ', isBold: false },
        { text: count, isBold: true },
        { text: this.t('personInTeam'), isBold: false },
      ];
    },
    itemCounts(item, countType, count = 0) {
      if (countType === 'isUnlimited') {
        return [
          { text: this.t('unlimited'), isBold: true },
          { text: this.t('quantity') + item, isBold: false },
        ];
      } else if (countType === 'upTo') {
        return [
          { text: 'до ', isBold: false },
          { text: count, isBold: true },
          { text: ' ' + item, isBold: false },
        ];
      } else if (countType === 'over') {
        return [
          { text: `${count}+`, isBold: true },
          { text: ' ' + item, isBold: false },
        ];
      }
    },
  }
}
</script>