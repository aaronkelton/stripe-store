$(function() {
  stripe_public_key = $("meta[name='stripe-public-key']").attr("content");
  Stripe.setPublishableKey(stripe_public_key);

  var $form = $('payment-form');
  $form.submit(function(event) {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
  });
});
