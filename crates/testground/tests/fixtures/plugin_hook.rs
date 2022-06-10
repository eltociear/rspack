use async_trait::async_trait;

use crate::common::{compile_fixture_with_plugins, prelude::*};
use rspack_core::{
  Chunk, LoadArgs, Loader, NormalizedBundleOptions, PluginContext, PluginLoadHookOutput,
  PluginResolveHookOutput, PluginTapGeneratedChunkHookOutput, PluginTransformAstHookOutput,
  PluginTransformHookOutput, ResolveArgs, TransformArgs,
};
use rspack_swc::swc_ecma_ast;
use std::sync::{atomic::AtomicBool, Arc};

#[derive(Debug, Default)]
struct Record {
  call_resolve: Arc<AtomicBool>,
  call_load: Arc<AtomicBool>,
  call_transform: Arc<AtomicBool>,
  call_optimize_ast: Arc<AtomicBool>,
  call_tap_generated_chunk: Arc<AtomicBool>,
}

#[derive(Debug)]
struct PluginHookTester {
  record: Arc<Record>,
}

#[async_trait]
impl Plugin for PluginHookTester {
  fn name(&self) -> &'static str {
    "rspack_test"
  }

  async fn resolve(&self, _ctx: &PluginContext, _args: &ResolveArgs) -> PluginResolveHookOutput {
    self
      .record
      .call_resolve
      .store(true, std::sync::atomic::Ordering::SeqCst);
    Ok(None)
  }

  async fn load(&self, _ctx: &PluginContext, _args: &LoadArgs) -> PluginLoadHookOutput {
    self
      .record
      .call_load
      .store(true, std::sync::atomic::Ordering::SeqCst);
    Ok(None)
  }

  fn optimize_ast(
    &self,
    _ctx: &PluginContext,
    _path: &str,
    ast: swc_ecma_ast::Module,
  ) -> PluginTransformAstHookOutput {
    self
      .record
      .call_optimize_ast
      .store(true, std::sync::atomic::Ordering::SeqCst);
    Ok(ast)
  }

  #[inline]
  fn transform(&self, _ctx: &PluginContext, args: TransformArgs) -> PluginTransformHookOutput {
    self
      .record
      .call_transform
      .store(true, std::sync::atomic::Ordering::SeqCst);
    Ok(args.into())
  }

  #[inline]
  fn tap_generated_chunk(
    &self,
    _ctx: &PluginContext,
    _chunk: &Chunk,
    _bundle_options: &NormalizedBundleOptions,
  ) -> PluginTapGeneratedChunkHookOutput {
    self
      .record
      .call_tap_generated_chunk
      .store(true, std::sync::atomic::Ordering::SeqCst);
    Ok(())
  }
}

#[tokio::test]
async fn plugin_test() {
  let record: Arc<Record> = Default::default();
  assert!(!record.call_load.load(std::sync::atomic::Ordering::SeqCst));
  assert!(!record
    .call_resolve
    .load(std::sync::atomic::Ordering::SeqCst));
  assert!(!record
    .call_transform
    .load(std::sync::atomic::Ordering::SeqCst));
  assert!(!record
    .call_optimize_ast
    .load(std::sync::atomic::Ordering::SeqCst));
  assert!(!record
    .call_tap_generated_chunk
    .load(std::sync::atomic::Ordering::SeqCst));
  let test_plugin = Box::new(PluginHookTester {
    record: record.clone(),
  });
  compile_fixture_with_plugins("plugin-hook", vec![test_plugin]).await;
  assert!(record.call_load.load(std::sync::atomic::Ordering::SeqCst));
  assert!(record
    .call_resolve
    .load(std::sync::atomic::Ordering::SeqCst));
  assert!(record
    .call_optimize_ast
    .load(std::sync::atomic::Ordering::SeqCst));
  assert!(record
    .call_tap_generated_chunk
    .load(std::sync::atomic::Ordering::SeqCst));
}
