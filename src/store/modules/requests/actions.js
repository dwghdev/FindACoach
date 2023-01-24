export default {
  contactCoach(ctx, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    ctx.commit('addRequest', newRequest);
  }
};
