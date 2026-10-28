# Daniel Zhao

[danielzhao02@gmail.com](mailto:danielzhao02@gmail.com) | [astradzhao.github.io](https://astradzhao.github.io/) | [linkedin.com/in/danzhao02](https://www.linkedin.com/in/danzhao02/)

## Education

### University of California, San Diego | San Diego, CA | Sep 2024 – Dec 2025

*M.S. in Computer Science – Machine Learning Focus* | GPA: 3.90

### University of California, Berkeley | Berkeley, CA | Aug 2020 – May 2024

*B.A. in Computer Science & B.A. in Applied Math* | GPA: 3.90

## Skills

**Languages & Frameworks:** Python, TypeScript, Go, C/C++, SQL, Java, Ruby, Scala, React, GraphQL

**ML & LLMs:** PyTorch, TensorFlow, agentic systems, LLM evals, RAG, knowledge graphs, distributed training, quantization (llama.cpp, ONNX), FAISS, LangChain

**Infrastructure:** AWS, Azure, Terraform, Docker, Kubernetes, Neo4j, TimescaleDB

## Professional Experience

### Founding Member of Technical Staff | Axilon | Dec 2025 – Present

- Built deterministic and multi-agent ingestion pipelines for proprietary industrial control systems (Ignition, Rockwell, Mitsubishi), CAD, and scanned factory documents, unifying operational data in a Neo4j knowledge graph
- Led technical deployment strategy for **3+ large manufacturing enterprises**, owning AWS and Azure infrastructure through Terraform, with forward-deployed work and training sessions for maintenance and line leaders on the factory floor
- Designed and shipped orchestrated, agentic harnesses for ingestion, plant query, and root cause analysis, enabling **scalable, VM-isolated, multi-tenant** agent execution over the ontology in TS & Golang
- Created **LLM-as-a-judge & deterministic evals alongside FactorySim**, a synthetic factory with causal ground truth, to benchmark agent root-cause accuracy across various SOTA foundation models
- Saved **70+% of LLM costs** by adding auto-compaction, token caching, dynamic model routing, and parallelization of tool calls
- Architected Git-style version control for the Neo4j graph: branching on Neo4j multi-database, commit history, 3-way merges with field-level and agent-assisted conflict resolution, and revert/restore
- Built the real-time plant data layer (OPC UA/Ignition tag acquisition, TimescaleDB historian, trigger evaluation), handling 100,000s of real-time tags as fundamental context for agents

### Applied ML Engineer (Contract) | Outerproduct | Feb 2026 – Apr 2026

- Performed **distributed training and steering of LLMs from 8B to 119B parameters** (Llama 3.1/3.3, Mistral Small 3.1/4) with recursive feature machines, stabilizing multi-GPU training and writing a custom FP8-to-BF16 dequantization loader for Mistral Small 4
- Generated a **500+ example synthetic training dataset** using Claude Sonnet 4.5 and a GPT-5-mini simulated user, and built **multi-turn steered-conversation evals**
- Served steered variants on RunPod and Modal sandboxes with Vercel frontends, shipping a Dockerized CUDA environment

### Machine Learning Engineer Intern | Qualcomm | Jun 2025 – Sep 2025

- Architected a multimodal RAG system through LangChain, utilizing **ONNX-based CLIP embeddings, a FAISS vector store, and Qwen2.5-VL**
- Deployed the system on a Qualcomm-native CPU machine, benchmarking against a CUDA host on recent visual QA datasets (Haystacks, ViDoRe, MRAG-Bench) using a self-built LLM-as-a-judge framework with a smaller judge model
- Cross-compiled Llama.cpp for Qualcomm Adreno GPUs and **quantized a 7B Qwen2.5-VL-Instruct model to Q4_0**, achieving **10x speedup** over baseline CPU implementation
- Profiled and optimized CLIP projection encoding in C++, achieving 5x speedup over the naive method through bottleneck analysis and matrix-multiplication tiling

### Teaching Assistant | UC San Diego | Dec 2024 – Dec 2025

- **CSE 234: ML Systems** (Winter 2025) under **Prof. Hao Zhang**: Co-built 3 brand-new programming assignments: matmul optimization (algorithmic, tiling, kernel-level, and allreduce/parallel variants), a TensorFlow-style autodiff framework built from scratch in Python, and speculative decoding; led final-exam proctoring and maintained the Ruby course website
- **CSE 253: ML for Music** (Spring 2025) & **CSE 258: Recommender Systems** (Fall 2025) under **Prof. Julian McAuley**

### Machine Learning Engineer Intern | Accretional | Jun 2024 – Sep 2024

- Designed and implemented a RAG vector embedding model to ground the LLM with respect to API and cloud infrastructure. Fully constructed VSCode application in Svelte and TypeScript to help users easily implement and deploy APIs

### Software Engineer Intern | Hinge Health | May 2023 – Aug 2023

- Replaced a tedious manual data-reset workflow with an automated flow built into the platform, saving engineers 100s of hours
- Designed and built endpoints and event consumers in TypeScript and Ruby on Rails, wiring services together with RabbitMQ event emitting, restructuring and extending GraphQL queries, and deploying to Kubernetes

### Full Stack Intern | Cisco Meraki | May 2022 – Aug 2022

- Led a full-stack project to build uplink ping-stat graphs that let 500,000 customers visualize wireless network trends over time, spanning a Scala grabber that collected ping stats from 4M+ nodes, Ruby on Rails endpoints over backend data collectors
- Ran experiments with global PostgreSQL and LittleTable queries across shards to mitigate the size of rapidly growing tables

## Research & Publications

### [Steering Autoregressive Music Generation with Recursive Feature Machines](https://arxiv.org/abs/2510.19127)

*ICLR 2026, first author* | [arXiv:2510.19127](https://arxiv.org/abs/2510.19127)

**Daniel Zhao**, Daniel Beaglehole, Taylor Berg-Kirkpatrick, Julian McAuley, Zachary Novack

- Developed MusicRFM, the **first framework to adapt recursive feature machines (RFMs) to text-to-music generation**, steering a frozen MusicGen-Large model through residual-stream concept directions with no fine-tuning
- Trained lightweight, layer-wise RFM probes (kernel ridge regression with Average Gradient Outer Product feature learning) on the SynTheory dataset to interpret and extract concept directions for musical features
- Raised target-note generation accuracy from 0.23 to 0.82 while keeping CLAP text-prompt adherence within about 0.02 of the unsteered baseline; open-sourced the code ([astradzhao/music-rfm](https://github.com/astradzhao/music-rfm), 40+ GitHub stars)

### [Benchmarking Scientific Understanding and Reasoning for Video Generation using VideoScience-Bench](https://arxiv.org/abs/2512.02942)

*ECCV 2026* | [arXiv:2512.02942](https://arxiv.org/abs/2512.02942)

Lanxiang Hu, Abhilash Shankarampeta, Yixin Huang, Zilin Dai, Haoyang Yu, Yujie Zhao, Haoqiang Kang, **Daniel Zhao**, Tajana Rosing, Hao Zhang

- Contributed to VideoScience-Bench, the **first benchmark to evaluate video models as zero-shot scientific reasoners**, evaluating seven SOTA models and building VideoScience-Judge, a VLM-based judge correlated with expert annotations

### [Towards Interpretable and Inference-Optimal CoT Reasoning with Sparse Autoencoder-Guided Generation](https://arxiv.org/abs/2510.01528)

*Preprint, 2025* | [arXiv:2510.01528](https://arxiv.org/abs/2510.01528)

**Daniel Zhao**\*, Abhilash Shankarampeta\*, Lanxiang Hu\*, Tajana Rosing, Hao Zhang (\*equal contribution)

- Trained SAEs on LLM token representations to build a cluster-transition graph of correct reasoning traces, using it as a scalable reward model for guiding CoT generation on GSM8K and HumanEval datasets

### [CLLMs: Consistency Large Language Models](https://arxiv.org/abs/2403.00835)

*ICML 2024, open-source contributor* | [arXiv:2403.00835](https://arxiv.org/abs/2403.00835)

Siqi Kou, Lanxiang Hu, Zhezhi He, Zhijie Deng, Hao Zhang

- Added QLoRA support to the official CLLM implementation ([hao-ai-lab/Consistency_LLM](https://github.com/hao-ai-lab/Consistency_LLM), 400+ GitHub stars)
- Enabled consistency fine-tuning on Jacobi trajectories with over 3x lower memory usage, for a parallel-decoding method that sped up LLM generation 2.4–3.4x without loss in quality