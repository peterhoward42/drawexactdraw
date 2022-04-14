<script>
    import Link from "../common/Link.svelte";
    import { isThereAUserSignedIn } from "../firebase/user"
    import { switchToDrawingModeAndBringUpUsersCurrentDrawing } from "../services/bringupdrawing"

    function handleGoToDrawings() {
        console.log("XXXX handleGoToDrawins() fired");
        isThereAUserSignedIn() ? bootstrapUserIsSignedIn(): bootstrapForUserUnknown();
    }

    function bootstrapUserIsSignedIn() {
        switchToDrawingModeAndBringUpUsersCurrentDrawing()
    }

    function bootstrapForUserUnknown() {
    }

</script>

<div class="q_bg">
    <Link title="Go To My Drawings" clickHandler={handleGoToDrawings} />
</div>

<style>
</style>
