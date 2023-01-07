<template>
  <main>
    <modal
    @closeModal="modalClosed"
    @esc-pressed="modalClosed"
    :showCloseButton="true"
    >
      <template #header>
        <div class="session-header">
          <p class="title-19 title-medium session-header-text">Book a session with Akhilesh</p>
          <!-- <div class="separator"/> -->
        </div>
      </template>
      <template #body>
        <div class="session-body">
          <session-plan-cards/>
        </div>
      </template>
      <template #footer>
      </template>
    </modal>
  </main>
</template>

<script>
import Modal from '@/components/ui/Modal'
import SessionPlanCards from '@/components/profile/SessionPlanCards'
export default {
  name: 'SessionBookingModal',
  emits: ['close-session-modal'],
  components: {
    Modal,
    SessionPlanCards
  },
  setup (props, { emit }) {
    const modalClosed = () => {
      emit('close-session-modal')
    }
    return {
      modalClosed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/library/colors.scss';
.session-header {
  margin: 0px 51px 0 16px;
  &-text {
    margin: 0 0 14px 0;
  }
}
.session-body {
  box-sizing: border-box;
  margin-top: 32px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
:deep() {
  .modal-container {
    width: 771px;
    height: 524px;
  }
}
</style>
